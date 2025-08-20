import {Request, Response} from 'express'
import { StatusCodes } from 'http-status-codes'
import * as dotenv from 'dotenv'
import axios from 'axios';
dotenv.config()

export const getDefects = async (req: Request, res: Response) => {
    const defectId = req.params.id;
    //res.json({message: `Defect with ID ${defectId} retrieved successfully.`});
    try {
        const response = await axios.get(`https://itrack.web.att.com/rest/agile/1.0/issue/${defectId}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }
         )

         res.status(StatusCodes.OK).json({
            message: `Defect with ID ${defectId} retrieved successfully.`,
            data: response.data
         })
    } catch (error) {
        console.error('Error fetching defect:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Error fetching defect' + error,
        })
    }

};