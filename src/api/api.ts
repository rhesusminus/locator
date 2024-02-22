import wretch from 'wretch'
import { Entity, EntityFromMessage, SecretMessage } from '../types'
import {
  clearSecretMessage,
  decodeSecret,
  secretMessageFromStringToArray
} from '../utils'

export const fetchEntity = (id: number): Promise<Entity> =>
  wretch(`https://akabab.github.io/starwars-api/api/id/${id}.json`).get().json()

export const fetchSecretMessage = async (): Promise<EntityFromMessage[]> => {
  const data: SecretMessage = await wretch(
    'https://aseevia.github.io/star-wars-frontend/data/secret.json'
  )
    .get()
    .json()

  const decodedMessage = decodeSecret(data.message)
  const clearMessage = clearSecretMessage(decodedMessage)
  const entities = secretMessageFromStringToArray(clearMessage)

  return entities
}
