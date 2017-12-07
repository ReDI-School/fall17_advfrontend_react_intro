export const api = "https://cdn.contentful.com"

export const init = {
  method: "GET",
  headers: {
    "access-control-allow-origin": "https://*.now.sh/about",
    mode: "cors"
  }
}

export default { api, init }
