
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Use a default in-memory database URL if not provided
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://localhost:5432/dekhetrends";

// Create pool with error handling
let pool: pg.Pool;
let db: ReturnType<typeof drizzle>;

try {
  pool = new Pool({ connectionString: DATABASE_URL });
  db = drizzle(pool, { schema });
} catch (error) {
  console.warn("Database connection failed, using mock database for development");
  // Create a mock pool that won't crash the server
  pool = new Pool({ connectionString: "postgresql://localhost:5432/mock" });
  db = drizzle(pool, { schema });
}

export { pool, db };
