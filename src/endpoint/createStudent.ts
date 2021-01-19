// Types from Express.js library
import { Request, Response } from 'express'

// Query functions
import {insertStudent} from '../data/insertStudent'

//Date format function
const { formatStringDate } = require('../utilites/dateFunctions');

// Database function
export const createStudents = async (req: Request, res: Response): Promise<any> => {
    try {
        const result = {
            student_name: req.body.student_name,
            student_email: req.body.student_email,
            student_birth_date: await formatStringDate(req.body.student_birth_date),
            mission_id: req.body.mission_id
        }

    //validation of mandatory fields
        const keys = Object.keys(req.body)

        for (const key of keys) {
          if (req.body[key] == "")
            return res.status(400).send({ message: "Dados inválidos. Por favor, preencha todos os campos."})
        }

        await insertStudent(result)

        res.status(200).send({ message:"Estudante criado com sucesso!"})

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}