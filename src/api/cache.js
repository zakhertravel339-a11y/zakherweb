/**
 * Client-side cache for read-only public API calls.
 *
 * Two layers:
 *  - In-flight dedup: concurrent callers for the same key share one promise,
 *    so e.g. three components mounting at once trigger a single request.
 *  - TTL memory cache: a successful result is reused for `ttl` ms, so
 *    navigating back to a page (or revisiting via keep-alive) is instant
 *    instead of refetching.
 *
 * Results are treated as immutable; callers must not mutate returned data.
 */

const DEFAULT_TTL_MS = 60 * 1000

const store = new Map() // key -> { value, expiresAt }
const inflight = new Map() // key -> Promise

/**
 * @param {string} key Unique cache key (include language/params).
 * @param {() => Promise<any>} fetcher Async function performing the request.
 * @param {{ ttl?: number }} [options]
 */
export async function cachedGet(key, fetcher, { ttl = DEFAULT_TTL_MS } = {}) {
  const now = Date.now()
  const hit = store.get(key)
  if (hit && hit.expiresAt > now) {
    return hit.value
  }

  const pending = inflight.get(key)
  if (pending) return pending

  const promise = (async () => {
    try {
      const value = await fetcher()
      store.set(key, { value, expiresAt: Date.now() + ttl })
      return value
    } finally {
      inflight.delete(key)
    }
  })()

  inflight.set(key, promise)
  return promise
}

/** Read a fresh-enough cached value without triggering a request. */
export function peekCache(key) {
  const hit = store.get(key)
  if (hit && hit.expiresAt > Date.now()) return hit.value
  return undefined
}

/** Drop cached entries (all, or those whose key starts with `prefix`). */
export function clearCache(prefix) {
  if (!prefix) {
    store.clear()
    inflight.clear()
    return
  }
  for (const key of [...store.keys()]) {
    if (key.startsWith(prefix)) store.delete(key)
  }
}
