import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

type DrizzleDB = ReturnType<typeof drizzle<typeof schema>>;

let pool: pg.Pool | null = null;
let db: DrizzleDB | null = null;
let dbInitialized = false;
let dbInitPromise: Promise<void> | null = null;

async function initDatabase(): Promise<void> {
  if (dbInitialized) return;
  
  const DATABASE_URL = process.env.DATABASE_URL;
  
  if (!DATABASE_URL) {
    console.warn("⚠ DATABASE_URL not set - running in fallback mode without database");
    dbInitialized = true;
    return;
  }

  try {
    pool = new Pool({ 
      connectionString: DATABASE_URL,
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
      max: 5,
    });

    const client = await pool.connect();
    client.release();
    
    db = drizzle(pool, { schema });
    console.log("✓ Database connection established");
  } catch (error: any) {
    console.warn("⚠ Database connection failed - running in fallback mode:", error.message);
    pool = null;
    db = null;
  }
  
  dbInitialized = true;
}

export function getDb(): DrizzleDB | null {
  return db;
}

export function getPool(): pg.Pool | null {
  return pool;
}

export async function ensureDbInitialized(): Promise<void> {
  if (!dbInitPromise) {
    dbInitPromise = initDatabase();
  }
  await dbInitPromise;
}

ensureDbInitialized();
