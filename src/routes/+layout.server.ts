import { db } from '$lib/server/db/';
import { school } from '$lib/server/db/school/schema';

export const load = async () => {
    const schoolData = await db.select().from(school);

    return {
        school: schoolData[0]
    }
}