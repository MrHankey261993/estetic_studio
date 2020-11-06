import { Router } from 'express'

import users from './controllers/users/users'
import categories from './controllers/categories/categories'
import services from './controllers/services/services'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(categories)
router.use(services)

export default router
