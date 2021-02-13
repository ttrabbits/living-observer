interface SensorValue {
  val: number
  created_at: string
}

interface SensorEvents {
  te: SensorValue
  hu: SensorValue
  il: SensorValue
  mo: SensorValue
}
