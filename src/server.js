'use strict'

import Hapi from '@hapi/hapi'
import routes from './routes.js'

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'], // ubah origin sesuai kebutuhan
        headers: ['Accept', 'Content-Type'],
        additionalHeaders: ['X-Requested-With'],
        exposedHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        credentials: true
      }
    }
  })

  server.route(routes)

  await server.start()
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
