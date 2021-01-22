// Types from Express.js library
import { Request, Response } from 'express'

// Query functions
import { updateStudentToClass } from '../../data/student/updateStudentToClass'
import { verifyBodyKeys, verifyNumber } from '../../utility/verifier'

// Database function
export const addStudentToClass = async (req: Request, res: Response): Promise<any> => {
    const validKeys = ["missionID"]

    try {
        verifyBodyKeys(req.body, validKeys)

        verifyNumber(req.params.student_id)
        verifyNumber(req.body.missionID)

        const result = {
            student_id: req.params.studentId,
            mission_id: req.body.missionID
        }

        await updateStudentToClass(result)

        res.status(200).send({ message: `Estudante adicionado à missão de id = ${result.mission_id}!` })

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}