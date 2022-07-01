import React from 'react'

type Fallback = (props: { error: Error | null }) => React.ReactNode

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallback: Fallback }>,
  { error: Error | null }
> {
  state = { error: null }

  static getDerivedStateFromError (error: Error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { error }
  }

  render () {
    const { children, fallback } = this.props
    const { error } = this.state

    if (error) {
      return fallback!({ error })
    }
    return children
  }
}
