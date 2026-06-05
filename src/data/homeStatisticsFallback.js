const DEFAULT_CONFIG = {
  section_title: 'STATISTICS',
}

const ITEMS = [
  { id: 'st-1', sort_order: 0, icon_class: 'fa-solid fa-handshake-simple', label: 'PARTNERS', counter_start: 0, counter_end: 2100, counter_duration_ms: 5000, display_suffix: '' },
  { id: 'st-2', sort_order: 1, icon_class: 'fa-solid fa-plane', label: 'DESTINATIONS', counter_start: 0, counter_end: 10, counter_duration_ms: 5000, display_suffix: '' },
  { id: 'st-3', sort_order: 2, icon_class: 'fa-solid fa-city', label: 'HOTELS', counter_start: 0, counter_end: 400, counter_duration_ms: 15000, display_suffix: '+' },
  { id: 'st-4', sort_order: 3, icon_class: 'fa-solid fa-person-walking-luggage', label: 'TOURISTS', counter_start: 0, counter_end: 81487, counter_duration_ms: 5000, display_suffix: '' },
  { id: 'st-5', sort_order: 4, icon_class: 'fa-solid fa-people-group', label: 'STAFF', counter_start: 0, counter_end: 60, counter_duration_ms: 15000, display_suffix: '+' },
]

export function getHomeStatisticsFallback() {
  return {
    config: { ...DEFAULT_CONFIG },
    items: ITEMS,
  }
}

export function mergeHomeStatistics(apiData) {
  const fallback = getHomeStatisticsFallback()
  if (!apiData) return fallback
  return {
    config: { ...fallback.config, ...(apiData.config || {}) },
    items: apiData.items?.length ? apiData.items : fallback.items,
  }
}
