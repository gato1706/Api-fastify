import { sql } from './db.js'



await sql`
    CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration TEXT
);
`.then(()=>{
    console.log('tabela criada')
})