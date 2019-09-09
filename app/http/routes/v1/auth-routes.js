const AuthController = require('../../controllers/v1/auth-controller')

module.exports = {
  map: (router) => {
    let version = 'v1'
    let versionPath = '/' + version

    router.post(versionPath + '/auth/signin', (request, response) => AuthController.signIn(request, response))
    router.post(versionPath + '/auth/signup', (request, response) => AuthController.signUp(request, response))
    router.post(versionPath + '/auth/recover', (request, response) => AuthController.recover(request, response))
    router.post(versionPath + '/auth/recover/callback', (request, response) => AuthController.recoverCallback(request, response))

    return router
  }
}
