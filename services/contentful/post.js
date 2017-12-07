import fetch from "isomorphic-unfetch"
import { api, init } from "./config"

const method = "POST"

export default function(path, data) {
  return fetch(`${api}${path}`, {
    ...init,
    method,
    headers: {
      ...init.headers,
      "Content-Type": "application/json"
    },
    body: data !== undefined ? JSON.stringify(data) : undefined
  })
}
