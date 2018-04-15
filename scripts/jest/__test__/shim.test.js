/* global describe it expect jest */

describe('shim polyfills', () => {
  it('should test that the requestAnimationFrame polyfill exists and returning the function passed to it', () => {
    const funcExists = typeof global.requestAnimationFrame === 'function'
    expect(funcExists).toEqual(true)
  })

  jest.useFakeTimers()
  const callback = jest.fn()
  global.requestAnimationFrame(callback)

  it('should call setTimout after 0 milliseconds', () => {
    expect(setTimeout.mock.calls.length).toBe(1)
    expect(setTimeout.mock.calls[0][1]).toBe(0)
  })

  it('should call the provided function', () => {
    jest.runAllTimers()

    expect(callback).toBeCalled()
    expect(callback.mock.calls.length).toBe(1)
  })
})
