// Database connection
import { connection } from "../connection";

//TYPE
import { Students } from "../../type/students"

export const insertStudent = async (student: Students): Promise<void> => {
    try {
        await connection
            .insert({
                student_name: student.student_name,
                student_email: student.student_email,
                student_birth_date: student.student_birth_date,
                mission_id: student.mission_id
            })
            .into("Students")

        console.log(`O estudante, ${student.student_name} foi criado com sucesso`);

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}