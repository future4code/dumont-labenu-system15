// Database connection
import { Students } from "../type/students";
import { connection } from "./connection";

export const selectStudentBDate = async (id: number): Promise<Students> => {
    try {
        const student = await connection("Students")
            .where('student_id', id)

        return student[0]
        
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
} 