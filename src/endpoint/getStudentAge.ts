// Types from Express.js library
import { Request, Response } from 'express'


// Query functions
import { selectStudentBDate } from '../data/selectStudentBDate';

// Utilities
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

// Database function
export const getStudentAge = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id)

        if(!id){
            res.statusCode = 404
            throw new Error("Please provide a student id as a param");
        } else {
            const queryResult = await selectStudentBDate(id)

            res.status(200).send({
                studentName: queryResult.student_name,
                age: dayjs().from(dayjs(queryResult.student_birth_date), true)
            })
        }
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}