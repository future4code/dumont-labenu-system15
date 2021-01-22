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
            student_name: req.body.studentName,
            student_email: req.body.studentEmail,
            student_birth_date: await formatStringDate(req.body.studentBirthDate),
            mission_id: req.body.missionId
        }

        await insertStudent(result)

        res.status(200).send({ message: "Estudante criado com sucesso!" })

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}