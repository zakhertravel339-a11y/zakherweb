import apiClient from './client.js'
import { getHomeStatisticsFallback, mergeHomeStatistics } from '@/data/homeStatisticsFallback.js'

export async function fetchHomeStatistics() {
  try {
    const { data } = await apiClient.get('/v1/ui/portal/home-statistics/')
    return mergeHomeStatistics(data)
  } catch {
    return getHomeStatisticsFallback()
  }
}
