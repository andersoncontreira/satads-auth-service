const ApiResponse = require('./../../api-response')
const AuthService = require('./../../../services/auth-service')

let authService = new AuthService()

/**
 *
 */
class AuthController {
  /**
   *
   */
  static signIn (request, response) {
    let apiResponse = new ApiResponse(request, response)
    let authPayload = authService.factoryAuthPayloadObject(request.body)
    if (authService.validate(authPayload)) {
      let signIn = authService.signIn(authPayload)
      signIn.then((result) => {
        // filter result
        result.password = null
        apiResponse.body = {
          result: true,
          message: 'SignIn success',
          data: result
        }

        apiResponse.json()
      }).catch((err) => {
        console.error(err)
        apiResponse.status(400)
        apiResponse.body = {
          result: false,
          message: authService.getErrorMessage()
        }
        apiResponse.json()
      })
    } else {
      apiResponse.status(400)
      apiResponse.body = {
        result: false,
        message: authService.getErrorMessage()
      }
      apiResponse.json()
    }
  }
  /**
   *
   */
  static signUp (request, response) {
    let apiResponse = new ApiResponse(request, response)

    let authPayload = authService.factoryAuthPayloadObject(request.body)

    if (authService.validate(authPayload)) {
      let creation = authService.signUp(authPayload)
      creation.then((result) => {
        // filter data
        result.password = null

        apiResponse.body = {
          result: true,
          message: 'SignUp with success',
          data: result
        }
        apiResponse.status(201)
        apiResponse.json()
      }).catch((err) => {
        console.error(err)

        apiResponse.body = {
          result: false,
          message: authService.getErrorMessage()
        }
        apiResponse.json()
      })
    } else {
      apiResponse.status(400)
      apiResponse.body = {
        result: false,
        message: authService.getErrorMessage()
      }
      apiResponse.json()
    }
  }
}

module.exports = AuthController
