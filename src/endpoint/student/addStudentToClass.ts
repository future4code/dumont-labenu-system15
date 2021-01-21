// Types from Express.js library
import { Request, Response } from 'express'

// Query functions
import { updateStudentToClass } from '../../data/student/updateStudentToClass'
import { verifyBodyKeys, verifyNumber } from '../../utility/verifier'

// Database function
export const addStudentToClass = async (req: Request, res: Response): Promise<any> => {
    const validKeys = ["mission_id"]

    try {
        verifyBodyKeys(req.body, validKeys)

        verifyNumber(req.params.student_id)
        verifyNumber(req.body.mission_id)

        const result = {
            student_id: req.params.student_id,
            mission_id: req.body.mission_id
        }

        await updateStudentToClass(result)

        res.status(200).send({ message: `Estudante adicionado à missão de id = ${result.mission_id}!` })

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}