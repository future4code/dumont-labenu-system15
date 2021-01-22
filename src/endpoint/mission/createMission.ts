// Types from Express.js library
import { Request, Response } from 'express'

// Type from src/type
import { Mission } from '../../type/mission'


// Query functions
import { insertMission } from '../../data/mission/insertMission'

// Utilities
import { checkDate } from '../../utility/checkDate'
import { formatDate } from '../../utility/formatDate'
import { verifyBodyKeys } from '../../utility/verifier'

// Database function
export const createMission = async (req: Request, res: Response): Promise<any> => {
    const validKeys = ["missionName", "startDate", "endDate"]

    try {
        res.statusCode = 422
        verifyBodyKeys(req.body, validKeys)

        res.statusCode = 406
        checkDate(req.body.startDate)
        checkDate(req.body.endDate)

        const newMission: Mission = {
            mission_name: req.body.missionName as string,
            start_date: formatDate(req.body.startDate),
            end_date: formatDate(req.body.endDate),
            module: Number(req.body.module) || 1
        }

        await insertMission(newMission)
        res.status(201).send("Mission created successfully.")

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}