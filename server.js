const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const DATA_FILE = path.join(DATA_DIR, 'state.json');

function loadEnvironmentFile() {
  const envPath = path.join(ROOT, '.env');
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const equalsIndex = trimmed.indexOf('=');
    if (equalsIndex === -1) continue;

    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadEnvironmentFile();

fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify({}, null, 2));

app.use(express.json({ limit: '1mb' }));
app.use(express.static(ROOT));

function readState() {
  try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); }
  catch { return {}; }
}
function writeState(state) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(state, null, 2));
}

app.get('/api/health', (req, res) => res.json({ ok: true, app: 'YAO FITNESS' }));
app.get('/api/config', (req, res) => {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
  res.set('Cache-Control', 'no-store');

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return res.json({ configured: false, error: 'Supabase is not configured' });
  }

  res.json({ configured: true, url: SUPABASE_URL, anonKey: SUPABASE_ANON_KEY });
});
app.get('/api/state', (req, res) => res.json(readState()));
app.post('/api/state', (req, res) => {
  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
    return res.status(400).json({ error: 'Invalid state payload' });
  }
  writeState(req.body);
  res.json({ ok: true, savedAt: new Date().toISOString() });
});

app.get('*', (req, res) => res.sendFile(path.join(ROOT, 'index.html')));

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`YAO FITNESS running at http://localhost:${port}`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      const nextPort = port + 1;
      console.warn(`Port ${port} is busy. Trying ${nextPort} instead.`);
      startServer(nextPort);
      return;
    }

    throw error;
  });
}

startServer(DEFAULT_PORT);
