import { db } from '$lib/server/db/';
import { school } from '$lib/server/db/school/schema';
import { pupils } from '$lib/server/db/pupils/schema';
import { staff } from '$lib/server/db/staff/schema';

export const load = async () => {
    const schoolInfo = await db.select().from(school)
    const allPupils = await db.select().from(pupils)
    const allStaff = await db.select().from(staff)


    return {
        school: schoolInfo,
        pupils: allPupils,
        staff: allStaff
    }
}