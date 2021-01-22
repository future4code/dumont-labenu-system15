// Types from Express.js library
import { Request, Response } from 'express'


// Query functions
import {selectTeachersFromMission} from '../../data/mission/selectTeachersFromMission'

// Utilities
import { verifyNumber } from '../../utility/verifier'


// Database function
export const getTeachersFromMission = async (req: Request, res: Response): Promise<void> => {
    try {
        verifyNumber(req.params.id)
        const missionId = Number(req.params.id)


        const queryResult = await selectTeachersFromMission(missionId)

        res.status(200).send(queryResult)

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}