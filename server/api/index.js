import { Router } from 'express'

import users from './controllers/users/users'
import ticket from './controllers/ticket/ticket'
import categories from './controllers/categories/categories'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(ticket)
router.use(categories)

export default router
