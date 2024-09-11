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
routes.get('/houses/:ids')
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update)
routes.delete('/houses', HouseController.destroy)

export default routes