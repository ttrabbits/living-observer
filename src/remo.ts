import { getRemoToken } from './credential'

const BASE_URL = 'https://api.nature.global/1'
const headers = {
  Authorization: `Bearer ${getRemoToken()}`,
}

function getDevices() {
  const endpoint = `${BASE_URL}/devices`
  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'get',
    headers,
    contentType: 'application/json',
  }
  const content = UrlFetchApp.fetch(endpoint, options).getContentText()
  return JSON.parse(content)
}

interface SensorValue {
  val: number
  created_at: string
}
interface Events {
  te: SensorValue
  hu: SensorValue
  il: SensorValue
  mo: SensorValue
}
export function getLastEvents(): Events {
  const devices = getDevices()
  return devices[0].newest_events as Events
}
