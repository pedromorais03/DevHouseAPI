import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import SessionController from './controller/SessionController'
import HouseController from './controller/HouseController'

const routes = new Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)

// upload.single => cause I want just one, if I wanted many: upload.array()
routes.post('/houses', upload.single('thumbnail'), HouseController.store)
routes.get('/houses', HouseController.index)
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update)

export default routes