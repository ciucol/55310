import {Express} from 'express'
import usersController from '../controller/users.controller'


export const router = (app: Express): void  => {
  app.use('/users', usersController)
}