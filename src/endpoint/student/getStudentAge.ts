// Types from Express.js library
import { Request, Response } from 'express'


// Query functions
import { selectStudentBDate } from '../../data/student/selectStudentBDate';

// Utilities
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { verifyNumber } from '../../utility/verifier';

dayjs.extend(relativeTime)

// Database function
export const getStudentAge = async (req: Request, res: Response): Promise<void> => {
    try {
        verifyNumber(req.params.id)

        const studentId = Number(req.params.id)


        const queryResult = await selectStudentBDate(studentId)

        res.status(200).send({
            studentName: queryResult.student_name,
            age: dayjs().from(dayjs(queryResult.student_birth_date), true)
        })
    }
    catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}