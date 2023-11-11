import * as cookies from 'vue-cookies'

export default function({ route, app }) {
  app.router.afterEach(() => {
    if (cookies.get('use_cookie'))
      if (cookies.isKey(route.name + 'v')) {
        let number = cookies.get(route.name + 'v')
        cookies.remove(route.name + 'v')
        cookies.set(route.name + 'v', ++number)
      } else {
        cookies.set(route.name + 'v', 1)
      } // /if
  }) // /afterEach
} // /export default
