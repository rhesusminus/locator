export type SecretMessage = { message: string }
export type Location = {
  lat: number
  long: number
}
export interface EntityFromMessage extends Location {
  id: number
}
export interface EntityFromMessageWithDistance extends EntityFromMessage {
  distance: number
}
export type Gender = 'male' | 'female'
export interface Entity {
  id: number
  name: string
  height: number
  mass: number
  gender: Gender
  homeworld: string
  wiki: string
  image: string
  born: number
  died: number
  diedLocation: string
  species: string
  hairColor: string
  eyeColor: string
  skinColor: string
  cybernetics: string
  affiliations: string[]
  masters: string[]
  apprentices: string[]
  formerAffiliations: string[]
}
