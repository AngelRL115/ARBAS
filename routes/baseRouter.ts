import express from 'express'
import defectRoutes from './defects.routes'

const baseRouter = express.Router()

defectRoutes(baseRouter)

export default baseRouter