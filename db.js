import 'dotenv/config'
import postgres from "postgres";


const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const URL='postgresql://neondb_owner:r3VZ5cvYgNmt@ep-round-salad-a5daxk1n.us-east-2.aws.neon.tech/neondb?sslmode=require';

export const sql = postgres(URL, { ssl: 'require'});


