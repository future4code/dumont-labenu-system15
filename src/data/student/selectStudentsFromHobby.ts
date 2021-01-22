// Database connection
import { connection } from "../connection";

export const selectStudentsFromHobby = async (hobby_id: number): Promise<any> => {
    try {
        const students = await connection.raw(`
            SELECT s.student_id, s.student_name FROM Students s
            JOIN Student_Hobby sh ON sh.hobby_id = ${hobby_id} AND sh.student_id = s.student_id;
        `)

        const hobby = await connection("Hobbies")
            .select("hobby_name")
            .where("hobby_id", hobby_id)

        return {
            hobby: hobby[0].hobby_name,
            students: students[0]
        }

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}