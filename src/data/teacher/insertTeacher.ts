// Database connection
import { connection } from "../connection"

// Type
import { Teacher } from "../../type/teacher"

export const insertTeacher = async (teacher: Teacher): Promise<void> => {
    try {
        await connection
            .insert(teacher)
            .into("Teachers")

            
    } catch (error) {
        console.log(error)

        throw new Error(error.sqlMessage)
    }
}