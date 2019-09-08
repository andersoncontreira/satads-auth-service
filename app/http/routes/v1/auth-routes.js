const AuthController = require('../../controllers/v1/auth-controller')

module.exports = {
  map: (router) => {
    let version = 'v1'
    let versionPath = '/' + version

    router.post(versionPath + '/auth/signin', (request, response) => AuthController.signIn(request, response))
    router.post(versionPath + '/auth/signup', (request, response) => AuthController.signUp(request, response))
    // recover

    return router
  }
}
