const DB_NAME = 'boyo-agent-tutor';
const DB_VERSION = 1;

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('progress')) {
        db.createObjectStore('progress', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('notes')) {
        db.createObjectStore('notes', { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function tx(db, store, mode) {
  return db.transaction(store, mode).objectStore(store);
}

export async function getProgress(contentId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const r = tx(db, 'progress', 'readonly').get(contentId);
    r.onsuccess = () => resolve(r.result || { id: contentId, status: 'none', updatedAt: null });
    r.onerror = () => reject(r.error);
  });
}

export async function setProgress(contentId, status) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const r = tx(db, 'progress', 'readwrite').put({
      id: contentId,
      status,
      updatedAt: new Date().toISOString(),
    });
    r.onsuccess = () => resolve();
    r.onerror = () => reject(r.error);
  });
}

export async function getNote(contentId) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const r = tx(db, 'notes', 'readonly').get(contentId);
    r.onsuccess = () => resolve(r.result || { id: contentId, content: '', updatedAt: null });
    r.onerror = () => reject(r.error);
  });
}

export async function saveNote(contentId, content) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const r = tx(db, 'notes', 'readwrite').put({
      id: contentId,
      content,
      updatedAt: new Date().toISOString(),
    });
    r.onsuccess = () => resolve();
    r.onerror = () => reject(r.error);
  });
}

export async function getAllProgress() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const r = tx(db, 'progress', 'readonly').getAll();
    r.onsuccess = () => {
      const map = {};
      for (const item of r.result) map[item.id] = item;
      resolve(map);
    };
    r.onerror = () => reject(r.error);
  });
}

export async function getAllNotes() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const r = tx(db, 'notes', 'readonly').getAll();
    r.onsuccess = () => {
      const map = {};
      for (const item of r.result) map[item.id] = item;
      resolve(map);
    };
    r.onerror = () => reject(r.error);
  });
}

export async function exportData() {
  const [progress, notes] = await Promise.all([getAllProgress(), getAllNotes()]);
  return { progress, notes, exportedAt: new Date().toISOString() };
}

export async function importData(json) {
  const data = typeof json === 'string' ? JSON.parse(json) : json;
  const db = await openDB();
  const pStore = tx(db, 'progress', 'readwrite');
  const nStore = tx(db, 'notes', 'readwrite');

  for (const item of Object.values(data.progress || {})) {
    pStore.put(item);
  }
  for (const item of Object.values(data.notes || {})) {
    nStore.put(item);
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['progress', 'notes'], 'readwrite');
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}
