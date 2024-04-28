import { db } from "$lib/server/db"
import { staff } from "$lib/server/db/staff/schema"

export const load = async () => {
    const allStaff = await db.select().from(staff)

    return {
        staff: allStaff
    }
}