/*
"id": 4,                   // ID of the entity
"lat": -33.85664180722481, // geographical latitude
"long": 151.2153396118792, // geographical longitude
*/
export type Location = {
  lat: number
  long: number
}

export interface Entity extends Location {
  id: number
}
