import  { Router } from "express"
import * as UserStoryController from '../controllers/userStory.controller'

const userStoryRouter = Router()
const userStoryRoutes = (baseRouter: Router) => {
    baseRouter.use('/userStories', userStoryRouter)

    userStoryRouter.get('/getUserStory/:id', UserStoryController.getUserStory)
}

export default userStoryRoutes