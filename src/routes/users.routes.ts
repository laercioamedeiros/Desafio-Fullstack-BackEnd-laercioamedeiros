import { Router } from 'express'
import { createUserController } from '../controllers/users.controllers'

const userRoutes = Router()

userRoutes.post('', createUserController)
// userRoutes.get('')
// userRoutes.patch('')
// userRoutes.delete('')

export default userRoutes