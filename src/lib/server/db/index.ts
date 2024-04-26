import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { env } from "$env/dynamic/private";

// Schemas
import * as school from '$lib/server/db/school/schema'
import * as pupils from '$lib/server/db/pupils/schema'

const client = createClient({
    url: env.TURSO_CONNECTION_URL,
    authToken: env.TURSO_AUTH_TOKEN,
})

export const db = drizzle(client, { schema: { ...school, ...pupils } })