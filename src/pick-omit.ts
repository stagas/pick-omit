export type Key = string | number | symbol

// https://stackoverflow.com/a/67942573
export type ObjectFromList<T extends ReadonlyArray<Key>, V = Key> = {
  [K in (T extends ReadonlyArray<infer U> ? U : never)]: V
}

/**
 * Pick properties from an object into a new object.
 *
 * @param obj Object to pick from.
 * @param props Properties to pick.
 * @returns A new object with the picked properties.
 */
export const pick = <T, K extends (keyof T)[]>(obj: T, props: K): Pick<T, keyof ObjectFromList<K>> =>
  filter(obj, props) as Pick<T, keyof ObjectFromList<K>>

/**
 * Create a new object with certain properties omitted.
 *
 * @param obj Object to omit from.
 * @param props Properties to omit.
 * @returns A new object with the properties omitted.
 */
export const omit = <T, K extends (keyof T)[]>(obj: T, props: K): Omit<T, keyof ObjectFromList<K>> =>
  filter(obj, props, true) as Omit<T, keyof ObjectFromList<K>>

/** @private */
export const filter = <T>(obj: T, props: Key[], invert = false): Partial<T> =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => (invert as any) ^ (props.includes(key) as any))
  ) as Partial<T>
