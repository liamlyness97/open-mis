import { db } from '$lib/server/db/';
import { school } from '$lib/server/db/school/schema'

export const load = async () => {
    const schoolInfo = await db.select().from(school)

    const test = 'test'

    return {
        school: schoolInfo,
        test
    }
}