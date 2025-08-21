import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import * as dotenv from "dotenv"
import axios from "axios"
dotenv.config()

export const getUserStory = async (req: Request, res: Response) => {
    const userStoryId = req.params.id
    try {
        const response = await axios.get(`https://itrack.web.att.com/rest/agile/1.0/issue/${userStoryId}`, {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}`,
                "Content-Type": "application/json",
            }
        })

        res.status(StatusCodes.OK).json({
            message: `User Story with ID ${userStoryId} retrieved successfully.`,
            data: response.data
        })

    } catch (error) {
        console.error('Error fetching User Story:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Error fetching User Story' + error,
        })
    }
}