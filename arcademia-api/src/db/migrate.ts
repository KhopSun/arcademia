import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import dotenv from 'dotenv'

dotenv.config({
    path: 'src/config/config.env'
});
// import db from '@/config/db'

const dbUrl = drizzle(postgres(process.env.DATABASE_URL!,{
    ssl: 'require', max: 1
}));

const migrator = async () => {
    try {
        console.log('Migrating database...');
        await migrate(dbUrl, {
            migrationsFolder: './drizzle',
        });
    } catch (error) {
        console.error(error);
    }
}

migrator();