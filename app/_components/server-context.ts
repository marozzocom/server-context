'server-only'

import { Usable, createServerContext, use } from "react"

const ServerContext = createServerContext<string | null>('server-context', null)

const getServerContext = () => {
  return use(ServerContext as Usable<string>)
}

export { ServerContext, getServerContext }
