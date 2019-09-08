const ApiController = require('./../controllers/api-controller')

module.exports =   {
  map: (router) => {

    // let version = (process.env.ARCH_VERSION) ? process.env.ARCH_VERSION :"v1"
    let version = "v1"
    let versionPath = "/"+ version

    router.get('/', (request, response) => ApiController.index(request, response))
    router.get('/ping', (request, response) => ApiController.ping(request, response))



    return router
  },
  printRoutes: (router) => {
    console.log('Mapped routes... ')
    router.stack.forEach(function(r){
      if (r.route && r.route.path){
        //console.log(r.route)
        let httpMethods = Object.keys(r.route.methods)
        httpMethods.forEach(function(httpMethod){
          console.log(httpMethod.toUpperCase() + ' ' + r.route.path)
        })

      }
    });
  }
}