import { db } from '$lib/server/db/';
import { school } from '$lib/server/db/school/schema';
import { pupils } from '$lib/server/db/pupils/schema';

export const load = async () => {
    const schoolInfo = await db.select().from(school)
    const allPupils = await db.select().from(pupils)


    return {
        school: schoolInfo,
        pupils: allPupils
    }
}