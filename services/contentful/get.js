import fetch from "isomorphic-unfetch"
import { api, init } from "./config"

export const space_id = "REPLACE_WITH_YOUR_CONTENTFUL_SPACE_ID"
export const access_token = "REPLACE_WITH_YOUR_CONTENTFUL_ACCESS_TOKEN"

export const get = function(path) {
  return fetch(`${api}${path}`, init)
}
