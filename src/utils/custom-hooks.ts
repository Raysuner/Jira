import { useEffect, useState } from "react"

export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timeId = setTimeout(() => setDebounceValue(value), delay)
    return () => clearTimeout(timeId)
  })
  return debouncedValue
}

// export const useDebounceFn = (func: () => void, delay: number) => {
//   const ref = useRef({func, delay, timeId: null})
//   ref.current.func = func
//   ref.current.delay = delay
//   return useCallback(function (...args: any[]) {
//     if (ref.current.timeId) {
//       clearTimeout(ref.current.timeId)
//     }
//     setTimeout(() => {
//       ref.current.func.apply(this, args)
//     })
//   }, [])
// }