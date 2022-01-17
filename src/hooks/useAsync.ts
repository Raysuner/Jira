import { State } from "common/interface";
import { useState } from "react";

const defaultState: State<null> = {
  status: 'idle',
  error: null,
  data: null
}

const defaultConfig = {
  throwError: false
}

export function useAsync<T>(initState?: State<T>, initConfig?: typeof defaultConfig) {
  const config = {...defaultConfig, ...initConfig}
  const [state, setState] = useState<State<T>>({
    ...defaultState,
    ...initState,
  })

  const setLoading = () => {
    setState({
      ...state,
      status: "pending"
    })
  }

  const setData = (data: T) => {
    setState({
      ...state,
      status: "success",
      error: null,
      data
    })
  }

  const setError = (error: Error) => {
    setState({
      ...state,
      status: "error",
      data: null,
      error
    })
  }

  const run = async (promise: Promise<T>) => {
    if (!promise || !promise.then) {
      throw new Error('需要传入thenable类型的对象')
    }
    setLoading()
    try {
      const data = await promise;
      setData(data);
      return data;
    } catch (error: any) {
      setError(error);
      if (config.throwError) {
        return Promise.reject(error);
      }
      return error
    }
  }

  return {
    ...state,
    run
  }
}
