import Head from 'next/head'
import getConfig from 'next/config'

const configs = getConfig()
const publicRuntimeConfig = configs?.publicRuntimeConfig

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="description">
          random var test: {publicRuntimeConfig.REACT_APP_TEST}
        </h1>

        <h1 className="description">
          next_public var test: {process.env.NEXT_PUBLIC_TEST}
        </h1>

      </main>
    </div>
  )
}
