// Database connection
import { connection } from "../connection";

//TYPE
import { Mission } from "../../type/mission";

export const insertMission = async (mission: Mission): Promise<void> => {
    try {
        await connection
            .insert(mission)
            .into("Missions")


    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}