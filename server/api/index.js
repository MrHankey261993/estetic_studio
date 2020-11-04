import { Router } from 'express'

import users from './controllers/users/users'
import ticket from './controllers/ticket/ticket'
const router = Router()

// Add USERS Routes
router.use(users)
router.use(ticket)

export default router
