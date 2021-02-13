import { getRemoToken } from './credential'

const BASE_URL = 'https://api.nature.global/1'
const headers = {
  Authorization: `Bearer ${getRemoToken()}`,
}

function request(path: string) {
  const endpoint = BASE_URL + path
  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    headers,
    method: 'get',
    contentType: 'application/json',
  }
  const content = UrlFetchApp.fetch(endpoint, options).getContentText()
  return JSON.parse(content)
}

function getDevices() {
  return request('/devices')
}

function getAppliances() {
  return request('/appliances')
}

export function getLastEvents() {
  const devices = getDevices()
  return devices[0].newest_events as SensorEvents
}

export function getSettings() {
  const appliances = getAppliances()

  let light = null
  let aircon = null
  for (const appliance of appliances) {
    if (appliance.type === 'LIGHT') {
      light = appliance.light.state
    }
    if (appliance.type === 'AC') {
      aircon = appliance.settings
    }
  }

  return { light, aircon }
}
