// Pure In-Memory Database - No PostgreSQL required
// This provides a simple storage solution for development/demo

const storage = {
  users: [
    { user_id: 1, name: 'Demo User', email: 'demo@example.com', password: '$2a$10$demo', phone: '+57 300 000 0000', role: 'user', created_at: new Date().toISOString() },
    { user_id: 2, name: 'Dr. Maria Garcia', email: 'vet@example.com', password: '$2a$10$demo', phone: '+57 300 111 1111', role: 'vet', created_at: new Date().toISOString() },
  ],
  pets: [
    { pet_id: 1, user_id: 1, name: 'Max', species: 'Dog', breed: 'Golden Retriever', age: 3, weight: 30, photo_url: null },
    { pet_id: 2, user_id: 1, name: 'Luna', species: 'Cat', breed: 'Siamese', age: 2, weight: 4, photo_url: null },
  ],
  appointments: [],
  businesses: [
    { business_id: 1, name: 'VetCare Central', address: 'Calle 10 #45-23, El Poblado', city: 'Medellin', phone: '+57 300 123 4567', email: 'contact@vetcare.com', rating: 4.8, services: 'General,Surgery,Emergency', is_24h: true, lat: 6.2087, lng: -75.5748 },
    { business_id: 2, name: 'Pet Health Clinic', address: 'Carrera 43A #1-50, Laureles', city: 'Medellin', phone: '+57 300 987 6543', email: 'info@pethealth.com', rating: 4.5, services: 'General,Vaccines,Grooming', is_24h: false, lat: 6.2442, lng: -75.5812 },
    { business_id: 3, name: 'Animal Care Center', address: 'Calle 33 #76-20, Belen', city: 'Medellin', phone: '+57 300 555 1234', email: 'citas@animalcare.co', rating: 4.9, services: 'General,Surgery,Emergency,Dental', is_24h: true, lat: 6.2320, lng: -75.6108 },
    { business_id: 4, name: 'Happy Paws Veterinary', address: 'Carrera 70 #44-30, Estadio', city: 'Medellin', phone: '+57 300 444 5678', email: 'hello@happypaws.co', rating: 4.7, services: 'General,Vaccines,Exotic Pets', is_24h: false, lat: 6.2554, lng: -75.5903 },
  ],
  medical_records: [
    { record_id: 1, pet_id: 1, vet_id: 2, date: '2024-01-15', diagnosis: 'Annual checkup - healthy', treatment: 'Vaccines updated', notes: 'Next visit in 1 year' },
  ],
  emergencies: [],
};

const idCounters = { 
  users: 3, 
  pets: 3, 
  appointments: 1, 
  businesses: 5, 
  medical_records: 2, 
  emergencies: 1 
};

function getIdField(table) {
  const fields = {
    users: 'user_id',
    pets: 'pet_id',
    appointments: 'appointment_id',
    businesses: 'business_id',
    medical_records: 'record_id',
    emergencies: 'emergency_id',
  };
  return fields[table] || 'id';
}

const db = {
  async initialize() {
    console.log('In-memory database initialized');
    return this;
  },

  async close() {
    console.log('Database closed');
  },

  async run(sql, params = []) {
    const insertMatch = sql.match(/INSERT INTO (\w+)/i);
    if (insertMatch) {
      const table = insertMatch[1].toLowerCase();
      if (storage[table]) {
        const idField = getIdField(table);
        const id = idCounters[table]++;
        const columnsMatch = sql.match(/\(([^)]+)\)\s*VALUES/i);
        const newRecord = { [idField]: id };
        if (columnsMatch) {
          const columns = columnsMatch[1].split(',').map(c => c.trim().toLowerCase());
          columns.forEach((col, i) => {
            if (params[i] !== undefined) newRecord[col] = params[i];
          });
        }
        storage[table].push(newRecord);
        return { lastID: id, changes: 1, [idField]: id };
      }
    }
    
    const updateMatch = sql.match(/UPDATE (\w+)/i);
    if (updateMatch) {
      return { changes: 1 };
    }
    
    const deleteMatch = sql.match(/DELETE FROM (\w+)/i);
    if (deleteMatch) {
      const table = deleteMatch[1].toLowerCase();
      if (storage[table]) {
        const whereMatch = sql.match(/WHERE (\w+)\s*=\s*\$1/i);
        if (whereMatch && params.length > 0) {
          const field = whereMatch[1].toLowerCase();
          const before = storage[table].length;
          storage[table] = storage[table].filter(item => item[field] != params[0]);
          return { changes: before - storage[table].length };
        }
      }
    }
    
    return { lastID: null, changes: 0 };
  },

  async get(sql, params = []) {
    const selectMatch = sql.match(/SELECT .* FROM (\w+)/i);
    if (selectMatch) {
      const table = selectMatch[1].toLowerCase();
      if (storage[table]) {
        const whereMatch = sql.match(/WHERE (\w+)\s*=\s*\$1/i);
        if (whereMatch && params.length > 0) {
          const field = whereMatch[1].toLowerCase();
          return storage[table].find(item => item[field] == params[0]) || null;
        }
        return storage[table][0] || null;
      }
    }
    if (sql.includes('COUNT(*)')) {
      return { count: '0' };
    }
    return null;
  },

  async all(sql, params = []) {
    const selectMatch = sql.match(/SELECT .* FROM (\w+)/i);
    if (selectMatch) {
      const table = selectMatch[1].toLowerCase();
      if (storage[table]) {
        let results = [...storage[table]];
        
        const whereMatch = sql.match(/WHERE (\w+)\s*=\s*\$1/i);
        if (whereMatch && params.length > 0) {
          const field = whereMatch[1].toLowerCase();
          results = results.filter(item => item[field] == params[0]);
        }
        
        const limitMatch = sql.match(/LIMIT\s+(\d+)/i);
        if (limitMatch) {
          results = results.slice(0, parseInt(limitMatch[1]));
        }
        
        return results;
      }
    }
    return [];
  },

  async exec(sql) {
    return Promise.resolve();
  },
};

module.exports = db;
