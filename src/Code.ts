import { getLastEvents, getSettings } from './remo'

const spreadsheetId = '1Dxzqk2o11eLu7WwikpD7GOwaQSQtavkYfyU8XOmuNqI'

function main() {
  const time = formatTime(new Date())
  const events = getLastEvents()
  const settings = getSettings()
  const movedTime = formatTime(new Date(events.mo.created_at))

  const data = [
    time,
    events.te.val,
    events.hu.val,
    events.il.val,
    settings.light.power === 'on' ? '1' : '0',
    settings.aircon.button === 'power-off' ? '0' : '1',
    settings.aircon.temp,
    events.mo.val,
    movedTime,
  ]

  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet()
  sheet.appendRow(data)
}

function formatTime(date: Date) {
  return Utilities.formatDate(date, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss')
}
