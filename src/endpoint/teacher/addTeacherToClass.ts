// Types from Express.js library
import { Request, Response } from 'express'

// Query functions
import { updateTeacherToClass } from '../../data/teacher/updateTeacherToClass'

// Utilities
import { verifyBodyKeys, verifyNumber } from '../../utility/verifier'


// Database function
export const addTeacherToClass = async (req: Request, res: Response): Promise<void> => {
    const validBody = ["missionID"]

    try {
        verifyNumber(req.params.id)
        verifyBodyKeys(req.body, validBody)
        verifyNumber(req.body.missionID)

        await updateTeacherToClass({
            mission_id: Number(req.params.id),
            teacher_id: Number(req.body.missionID)
        })

        res.status(200).send(`Teacher assigned to a new class successfully.`)

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}