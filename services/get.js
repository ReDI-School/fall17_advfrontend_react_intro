import fetch from "isomorphic-unfetch"
import { api, init } from "./config"

export default function(path) {
  return fetch(`${api}${path}`, init)
}
