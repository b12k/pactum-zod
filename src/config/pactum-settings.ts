import { settings } from 'pactum';
import { env } from './env';

settings.setLogLevel(env.LOG_LEVEL);
