require('dotenv').config({ path: '../.env' });

// In-memory storage for development/demo when PostgreSQL is not available
const inMemoryStorage = {
  users: [],
  pets: [],
  appointments: [],
  clinics: [
    { id: 1, name: 'VetCare Central', address: '123 Main St', phone: '+57 300 123 4567', rating: 4.8, services: ['General', 'Surgery', 'Emergency'], is_24h: true },
    { id: 2, name: 'Pet Health Clinic', address: '456 Oak Ave', phone: '+57 300 987 6543', rating: 4.5, services: ['General', 'Vaccines', 'Grooming'], is_24h: false },
    { id: 3, name: 'Animal Care Center', address: '789 Pine Rd', phone: '+57 300 555 1234', rating: 4.9, services: ['General', 'Surgery', 'Emergency', 'Dental'], is_24h: true },
  ],
  emergencies: [],
};

class InMemoryDatabase {
  constructor() {
    this.data = inMemoryStorage;
    this.idCounters = { users: 1, pets: 1, appointments: 1, clinics: 4, emergencies: 1 };
  }

  async connect() {
    console.log('Using in-memory storage (PostgreSQL not available)');
    return Promise.resolve();
  }

  async initialize() {
    await this.connect();
    console.log('In-memory database initialized');
    return this;
  }

  async run(sql, params = []) {
    // Parse simple INSERT/UPDATE/DELETE statements for in-memory storage
    const insertMatch = sql.match(/INSERT INTO (\w+)/i);
    if (insertMatch) {
      const table = insertMatch[1].toLowerCase();
      if (this.data[table]) {
        const id = this.idCounters[table]++;
        const newRecord = { id, ...this.parseInsertParams(sql, params) };
        this.data[table].push(newRecord);
        return { lastID: id, changes: 1 };
      }
    }
    return { lastID: null, changes: 0 };
  }

  async get(sql, params = []) {
    const selectMatch = sql.match(/SELECT .* FROM (\w+)/i);
    if (selectMatch) {
      const table = selectMatch[1].toLowerCase();
      if (this.data[table]) {
        // Simple WHERE clause parsing
        const whereMatch = sql.match(/WHERE (\w+)\s*=\s*\$1/i);
        if (whereMatch && params.length > 0) {
          const field = whereMatch[1].toLowerCase();
          return this.data[table].find(item => item[field] == params[0]) || null;
        }
        return this.data[table][0] || null;
      }
    }
    // For COUNT queries
    if (sql.includes('COUNT(*)')) {
      return { count: '0' };
    }
    return null;
  }

  async all(sql, params = []) {
    const selectMatch = sql.match(/SELECT .* FROM (\w+)/i);
    if (selectMatch) {
      const table = selectMatch[1].toLowerCase();
      if (this.data[table]) {
        return this.data[table];
      }
    }
    return [];
  }

  async exec(sql) {
    return Promise.resolve();
  }

  async close() {
    console.log('In-memory database closed');
    return Promise.resolve();
  }

  parseInsertParams(sql, params) {
    // Extract column names from INSERT statement
    const columnsMatch = sql.match(/\(([^)]+)\)\s*VALUES/i);
    if (columnsMatch) {
      const columns = columnsMatch[1].split(',').map(c => c.trim().toLowerCase());
      const result = {};
      columns.forEach((col, index) => {
        if (params[index] !== undefined) {
          result[col] = params[index];
        }
      });
      return result;
    }
    return {};
  }
}

// Try to use PostgreSQL, fall back to in-memory if not available
let database;

const DB_HOST = process.env.DB_HOST;

if (DB_HOST && DB_HOST !== 'db') {
  // PostgreSQL is configured
  const { Pool } = require('pg');
  
  const DB_CONFIG = {
    host: DB_HOST,
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'myvet_db',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
  };

  class PostgresDatabase {
    constructor() {
      this.pool = null;
    }

    connect() {
      return new Promise((resolve, reject) => {
        try {
          this.pool = new Pool(DB_CONFIG);
          this.pool.query('SELECT NOW()', (err, result) => {
            if (err) {
              console.error('Failed to connect to PostgreSQL:', err);
              reject(err);
            } else {
              console.log('Connected to PostgreSQL');
              console.log(`Database: ${DB_CONFIG.database}`);
              resolve();
            }
          });
        } catch (error) {
          reject(error);
        }
      });
    }

    async initialize() {
      try {
        await this.connect();
        return this;
      } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
      }
    }

    run(sql, params = []) {
      return new Promise((resolve, reject) => {
        this.pool.query(sql, params, (err, result) => {
          if (err) {
            reject(err);
          } else {
            const lastID = result.rows && result.rows[0] ? result.rows[0].id : null;
            resolve({ lastID, changes: result.rowCount });
          }
        });
      });
    }

    get(sql, params = []) {
      return new Promise((resolve, reject) => {
        this.pool.query(sql, params, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.rows[0] || null);
          }
        });
      });
    }

    all(sql, params = []) {
      return new Promise((resolve, reject) => {
        this.pool.query(sql, params, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.rows);
          }
        });
      });
    }

    async exec(sql) {
      await this.pool.query(sql);
      return Promise.resolve();
    }

    close() {
      return new Promise((resolve, reject) => {
        if (this.pool) {
          this.pool.end((err) => {
            if (err) reject(err);
            else {
              console.log('Database connection closed');
              resolve();
            }
          });
        } else {
          resolve();
        }
      });
    }
  }

  database = new PostgresDatabase();
} else {
  // Use in-memory storage
  database = new InMemoryDatabase();
}

module.exports = database;
