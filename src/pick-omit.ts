import { NonNull, ObjectFromList } from 'everyday-types'

export type ObjectFilterFn = (entry: [string, unknown]) => boolean

/**
 * Filter object with filter function `fn`.
 *
 * @param obj Object to filter.
 * @param fn Filter function receiving [key, value].
 * @returns A new object filtered.
 */
export const filter = <T>(obj: T, fn: ObjectFilterFn): Partial<T> =>
  Object.fromEntries(
    Object.entries(obj).filter(fn)
  ) as Partial<T>

/**
 * Filter out nullish values from object.
 *
 * @param obj Object to filter.
 * @returns A new object without the null values.
 */
export const nonNull = <T>(obj: T): Pick<T, keyof NonNull<T>> =>
  filter(obj, ([, value]) => value != null) as Pick<T, keyof NonNull<T>>

/**
 * Pick properties from an object into a new object.
 *
 * @param obj Object to pick from.
 * @param props Properties to pick.
 * @returns A new object with the picked properties.
 */
export const pick = <T, K extends (keyof T)[]>(obj: T, props: K): Pick<T, keyof ObjectFromList<K>> =>
  props.reduce((p, n) => {
    if (n in obj) p[n] = obj[n]
    return p
  }, {} as any) as Pick<T, keyof ObjectFromList<K>>

/**
 * Create a new object with certain properties omitted.
 *
 * @param obj Object to omit from.
 * @param props Properties to omit.
 * @returns A new object with the properties omitted.
 */
export const omit = <T, K extends (keyof T)[]>(obj: T, props: K): Omit<T, keyof ObjectFromList<K>> =>
  filter(obj, includesKey(props, true)) as Omit<T, keyof ObjectFromList<K>>

/**
 * @private
 */
export const includesKey = <K extends unknown[]>(props: K, invert = false): ObjectFilterFn =>
  ([key]) => ((invert as any) ^ (props.includes(key) as any)) as unknown as boolean
