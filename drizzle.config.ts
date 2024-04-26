import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'

dotenv.config();

const { TURSO_CONNECTION_URL, TURSO_AUTH_TOKEN } = process.env;

if (!TURSO_CONNECTION_URL) {
    throw new Error('No Database URL')
}

if (!TURSO_AUTH_TOKEN) {
    throw new Error('No Database Auth Token')
}

export default {
    schema: './src/lib/server/db/**/schema.ts',
    out: './migrations',
    driver: 'turso',
    dbCredentials: {
        url: TURSO_CONNECTION_URL,
        authToken: TURSO_AUTH_TOKEN
    }
} satisfies Config