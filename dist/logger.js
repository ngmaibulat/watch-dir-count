import bunyan from 'bunyan';
import { readJson } from '@aibulat/json';
const config = await readJson('log.cfg.json');
const logger = bunyan.createLogger(config);
export { logger };
