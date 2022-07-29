import { inspectWithPreamble, setOptions } from '@n1kk/intspector'
import { nonNull, omit, pick } from '../src'

setOptions(require('../tsconfig.json'), true)

const typeTest = (fn: string) => {
  try {
    const { result } = inspectWithPreamble(`
      import { omit, pick, nonNull } from '../src'
      const result = ${fn}
    `)({ result: 'typeof result' })
    return result
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error[0].messageText
  }
}

describe('all', () => {
  describe('pick(obj, keys)', () => {
    it('picks keys from object', () => {
      expect(pick({ a: 'a', b: 'b', c: 'c' }, ['b'])).toEqual({ b: 'b' })
      expect(pick({ a: 'a', b: 'b', c: 'c' }, ['a', 'b'])).toEqual({ a: 'a', b: 'b' })
      expect(pick({ a: 'a', b: 'b', c: 'c' }, ['a', 'b', 'c'])).toEqual({ a: 'a', b: 'b', c: 'c' })
    })

    it('creates correct type', () => {
      expect(typeTest(`pick({ a: 'a', b: 'b', c: 'c' }, ['a', 'b', 'c'])`)).toEqual(
        `{ a: string; b: string; c: string; }`
      )
      // expect(pick({ a: 'a', b: 'b', c: 'c' }, ['a', 'b', 'c', 'd'])).toEqual({ a: 'a', b: 'b', c: 'c' })
      expect(typeTest(`pick({ a: 'a', b: 'b', c: 'c' }, ['a', 'b', 'c', 'd'])`)).toContain(
        'Type \'"d"\' is not assignable to type \'"a" | "b" | "c"\'.'
      )
    })
  })

  describe('omit(obj, keys)', () => {
    it('omits keys from object', () => {
      expect(omit({ a: 'a', b: 'b', c: 'c' }, ['b'])).toEqual({ a: 'a', c: 'c' })
      expect(omit({ a: 'a', b: 'b', c: 'c' }, ['a', 'b'])).toEqual({ c: 'c' })
      expect(omit({ a: 'a', b: 'b', c: 'c' }, ['a', 'b', 'c'])).toEqual({})
    })

    it('creates correct type', () => {
      expect(typeTest(`omit({ a: 'a', b: 'b', c: 'c' }, ['a', 'b', 'c'])`)).toEqual(
        `{}`
      )
      // expect(omit({ a: 'a', b: 'b', c: 'c' }, ['a', 'b', 'c', 'd'])).toEqual({})
      expect(typeTest(`omit({ a: 'a', b: 'b', c: 'c' }, ['a', 'b', 'c', 'd'])`)).toContain(
        'Type \'"d"\' is not assignable to type \'"a" | "b" | "c"\'.'
      )
    })
  })

  describe('nonNull', () => {
    it('picks non null values', () => {
      expect(nonNull({ a: 'a', b: null, c: undefined })).toEqual({ a: 'a' })
    })

    it('creates correct type', () => {
      expect(typeTest(`nonNull({ a: 'a', b: null, c: undefined })`)).toEqual(
        // TODO: some weird reason these become any instead of being removed
        `{ a: string; b: any; c: any; }`
      )
    })
  })
})
