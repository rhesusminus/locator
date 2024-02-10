/**
 * Returns decoded secret message
 *
 * @param secret Secret message
 * @returns Decoded secret message
 */
export const decodeSecret = (secret: string) => atob(secret)
