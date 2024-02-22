import { EntityFromMessage } from './types'

/**
 * Returns decoded secret message
 *
 * @param secret Secret message
 * @returns Decoded secret message
 */
export const decodeSecret = (secret?: string) => (secret ? atob(secret) : '')

export const clearSecretMessage = (message: string) =>
  message
    .replaceAll('\n', '')
    .replaceAll(' ', '')
    .replaceAll('"', '')
    .replaceAll('[{', '')
    .replaceAll('{', '')
    .replaceAll('}]', '')
    .replaceAll('}', '')
    .split(',')

export const secretMessageFromStringToArray = (array: string[]) => {
  const resultArr: EntityFromMessage[] = []

  const stringsToObj = (arr: string[]) => {
    if (arr.length === 0) {
      return
    }

    const newObj: EntityFromMessage = {
      id: 0,
      lat: 0,
      long: 0
    }

    const threeItemsFromArray = arr.splice(0, 3)
    threeItemsFromArray.forEach((e) => {
      const [key, value] = e.split(':')
      newObj[key as keyof EntityFromMessage] = Number(value)
    })

    resultArr.push(newObj)
    stringsToObj(arr)
  }

  stringsToObj(array)

  return resultArr
}
