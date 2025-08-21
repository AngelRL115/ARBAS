import express from 'express'
import defectRoutes from './defects.routes'
import userStoryRoutes from './userStories.routes'

const baseRouter = express.Router()

defectRoutes(baseRouter)
userStoryRoutes(baseRouter)

export default baseRouter