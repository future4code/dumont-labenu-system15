// Database connection
import { connection } from "../connection";

export const selectTeachersFromMission = async (mission_id: number): Promise<any> => {
    try {
        const teachers = await connection("Teachers")
            .select("teacher_id", "teacher_name")
            .where("mission_id", mission_id)

        const mission = await connection("Missions")
            .select("mission_name")
            .where("mission_id", mission_id)

        return {
            missionName: mission[0].mission_name,
            teachers }

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}