// Database connection
import { connection } from "./connection";

export const updateStudentToClass = async (student: {
    mission_id: number,
    student_id: string
}): Promise<void> => {
    try {
        await connection("Students")
            .update({ mission_id: student.mission_id})
            .where("student_id", student.student_id)

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
} 