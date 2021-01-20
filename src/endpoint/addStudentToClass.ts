// Types from Express.js library
import { Request, Response } from 'express'

// Query functions
import {updateStudentToClass} from '../data/updateStudentToClass'

// Database function
export const addStudentToClass = async (req: Request, res: Response): Promise<any> => {
    try {
        const result = {
            student_id: req.params.student_id,
            mission_id: req.body.mission_id
        }

    //Validação todos os campos obrigatórios
        const keys = Object.keys(req.body)

        for (const key of keys) {
          if (req.body[key] == "")
            return res.status(400).send({ message: "Dados inválidos. Por favor, preencha todos os campos."})
        }

        await updateStudentToClass(result)

        res.status(200).send({ message:`Estudante adicionado à missão de id = ${result.mission_id}!`})

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}