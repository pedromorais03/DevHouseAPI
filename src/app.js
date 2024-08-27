import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import routes from './routes'

class App{

  constructor(){
    this.server = express()

    mongoose.connect(`mongodb+srv://devhouse:${process.env.MONGO_DB_PASSWORD}@devhouse.golmv.mongodb.net/devhouse?retryWrites=true&w=majority&appName=DevHouse`)

    this.middlewares()
    this.routes()
  }

  middlewares(){

    // Creating a middleware to enable access to the house file house
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    )

    this.server.use(express.json())
  }

  routes(){
    this.server.use(routes)
  }

}

export default new App().server