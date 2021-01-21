// Database connection
import { connection } from "../connection";

export const selectStudentsFromMission = async (mission_id: number): Promise<any> => {
    try {
        const students = await connection("Students")
            .select("student_id", "student_name")
            .where("mission_id", mission_id)

        const mission = await connection("Missions")
            .select("mission_name")
            .where("mission_id", mission_id)

        return {
            missionName: mission[0].mission_name,
            students }

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}