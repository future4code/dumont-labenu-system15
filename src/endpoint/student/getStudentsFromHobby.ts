// Types from Express.js library
import { Request, Response } from 'express'


// Query functions
import { selectStudentsFromHobby } from '../../data/student/selectStudentsFromHobby'

// Utilities
import { verifyNumber } from '../../utility/verifier'


// Database function
export const getStudentsFromHobby = async (req: Request, res: Response): Promise<void> => {
    try {
        verifyNumber(req.params.id)
        const hobbyId = Number(req.params.id)


        const queryResult = await selectStudentsFromHobby(hobbyId)

        res.status(200).send(queryResult)

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}