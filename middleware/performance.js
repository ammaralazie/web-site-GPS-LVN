import * as cookies from 'vue-cookies'

export default function({ route, app }) {
  if (process.client) {
    const startTime = performance.now()

    app.router.afterEach(() => {
      const endTime = performance.now()
      const loadTime = endTime - startTime
      if (cookies.get('use_cookie'))
        cookies.set(
          route.name,
          `endTime : ${endTime} , loadTime : ${loadTime}, path : ${route.path}`
        )
    })
  }
}
