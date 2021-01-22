// Database connection
import { connection } from "../connection";

export const updateTeacherToClass = async (teacher: {
    mission_id: number,
    teacher_id: number
}): Promise<void> => {
    try {
        await connection("Teachers")
            .update({ mission_id: teacher.mission_id })
            .where("teacher_id", teacher.teacher_id)

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
} 