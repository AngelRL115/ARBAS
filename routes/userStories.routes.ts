import  { Router } from "express"
import * as UserStoryController from '../controllers/userStory.controller'

const userStoryRouter = Router()
const userStoryRoutes = (baseRouter: Router) => {
    baseRouter.use('/userStories', userStoryRouter)

    userStoryRouter.get('/getUserStory/:id', UserStoryController.getUserStory)
    userStoryRouter.post('/createUserStory', UserStoryController.createUserStory)
}

export default userStoryRoutes