import { Router } from "express"
import * as DefectController from '../controllers/defect.controller'

const defectRouter = Router()
const defectRoutes = (baseRouter: Router) => {
    baseRouter.use('/defects', defectRouter)

    defectRouter.get('/getDefect/:id', DefectController.getDefects)
}

export default defectRoutes