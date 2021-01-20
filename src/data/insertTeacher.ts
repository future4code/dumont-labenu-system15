// Database connection
import { connection } from "./connection"

// Type
import { Teacher } from "../type/teacher"

export const insertTeacher = async (teacher: Teacher): Promise<void> => {
    try {
        await connection
            .insert(teacher)
            .into("Teachers")

            
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}