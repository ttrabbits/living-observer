import { getLastEvents, getSettings } from './remo'

const spreadsheetId = '1Dxzqk2o11eLu7WwikpD7GOwaQSQtavkYfyU8XOmuNqI'

function main() {
  const date = Utilities.formatDate(
    new Date(),
    'Asia/Tokyo',
    'yyyy-MM-dd HH:mm:ss'
  )
  const events = getLastEvents()
  const settings = getSettings()

  const data = [
    date,
    events.te.val,
    events.hu.val,
    events.il.val,
    settings.light.power === 'on' ? '1' : '0',
    settings.light.brightness,
    settings.aircon.button === 'power-off' ? '0' : '1',
    settings.aircon.temp,
  ]

  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet()
  sheet.appendRow(data)
}
