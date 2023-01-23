const host = process.env.REACT_APP_HOSTNAME || 'localhost';
const port = process.env.REACT_APP_BACKEND_PORT || '3001';

const API_URL = `http://${host}:${port}/`;

export default API_URL;
