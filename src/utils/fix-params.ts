const isVoid = (value: unknown) => value === null || value === undefined || value === ''

export function fixParams(params: {[key: string]: unknown}) {
  const cloneParams = { ...params }
  for (const key in cloneParams) {
    if (cloneParams.hasOwnProperty(key)) {
      if (isVoid(cloneParams[key])) {
        delete cloneParams[key]
      }
    }
  }
  return cloneParams
}
