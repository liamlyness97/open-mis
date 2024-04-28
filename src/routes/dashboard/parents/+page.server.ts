import { db } from "$lib/server/db"
import { parents } from "$lib/server/db/parents/schema"

export const load = async () => {
    const allParents = await db.select().from(parents)


    return {
        parents: allParents
    }
} 