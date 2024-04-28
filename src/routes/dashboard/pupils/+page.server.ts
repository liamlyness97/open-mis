import { db } from "$lib/server/db"
import { pupils } from '$lib/server/db/pupils/schema'

export const load = async () => {
    const allPupils = await db.select().from(pupils)

    return {
        pupils: allPupils
    }
}