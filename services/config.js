export const api = "https://json-server-test.now.sh"

export const init = {
  method: "GET",
  headers: {
    "access-control-allow-origin": "https://*.now.sh/about",
    mode: "cors"
  }
}

export default { api, init }
