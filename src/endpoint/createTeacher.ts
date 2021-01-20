// Types from Express.js library
import { Request, Response } from 'express'

// Query functions
import { insertTeacher } from '../data/insertTeacher'

// Type
import { Teacher } from '../type/teacher'

// Utility
import { verifyBodyKeys, verifyString } from '../utility/verifier'
import { checkDate } from '../utility/checkDate'
import { formatDate } from '../utility/formatDate'

// Database function
export const createTeacher = async (req: Request, res: Response): Promise<void> => {
    const validKeys = ["name", "email", "birthdate"]

    try {
        verifyBodyKeys(req.body, validKeys)
        verifyString(req.body)

        if(!checkDate(req.body.birthdate)) {
            throw new Error("Please provide the birthdate in the format DD/MM/YYYY")
        }

        const newTeacher: Teacher = {
            teacher_name: req.body.name,
            teacher_email: req.body.email,
            teacher_birth_date: formatDate(req.body.birthdate)
        }

        await insertTeacher(newTeacher)
        res.status(201).send("Teacher created successfully.")
        
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}