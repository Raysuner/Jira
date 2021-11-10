export function fixParams(params: object) {
  const cloneParams = { ...params }
  for (const key in cloneParams) {
    if (cloneParams.hasOwnProperty(key)) {
      // @ts-ignore
      if (cloneParams[key] !== 0 && !cloneParams[key]) {
      // @ts-ignore
        delete cloneParams[key]
      }
    }
  }
  return cloneParams
}