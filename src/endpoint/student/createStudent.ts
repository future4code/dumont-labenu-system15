// Types from Express.js library
import { Request, Response } from 'express'

// Query functions
import { insertStudent } from '../../data/student/insertStudent'

// Utilities
import { verifyBodyKeys } from '../../utility/verifier';

// Date format function
const { formatStringDate } = require('../../utility/dateFunctions');

// Database function
export const createStudents = async (req: Request, res: Response): Promise<any> => {
    const validKeys = ["student_name", "student_email", "student_birth_date", "mission_id"]

    try {
        verifyBodyKeys(req.body, validKeys)

        const result = {
            student_name: req.body.student_name,
            student_email: req.body.student_email,
            student_birth_date: await formatStringDate(req.body.student_birth_date),
            mission_id: req.body.mission_id
        }

        await insertStudent(result)

        res.status(200).send({ message: "Estudante criado com sucesso!" })

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}