// Types from Express.js library
import { Request, Response } from 'express'
import { Mission } from '../type/mission'
import { checkDate } from '../utility/checkDate'
import { formatDate } from '../utility/formatDate'

// Query functions
import { insertMission } from '../data/insertMission'

// Database function
export const createMission = async (req: Request, res: Response): Promise<any> => {
    try {

        const newMission: Mission = {
            mission_name: req.body.mission_name,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            module: Number(req.body.module) || 1
        }

        const checkingStart = checkDate(newMission.start_date)
        const checkingEnd = checkDate(newMission.end_date)

        if (!newMission.mission_name || !newMission.start_date || !newMission.end_date) {
            res.statusCode = 422
            throw new Error("Please provide a mission_name, a start_date and an end_date.")
        } else {
            if (!checkingStart) {
                res.statusCode = 406
                throw new Error("Please provide the start_date in the format DD/MM/YYYY")
            }
            

            if (!checkingEnd) {
                res.statusCode = 406
                throw new Error("Please provide the end_date in the format DD/MM/YYYY")
            }

            newMission.start_date = formatDate(newMission.start_date)
            newMission.end_date = formatDate(newMission.end_date)


            insertMission(newMission)
            res.status(201).send("Mission created")
        }

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}