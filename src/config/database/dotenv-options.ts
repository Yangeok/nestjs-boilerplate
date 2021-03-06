import * as path from 'path';

const nodeEnv = process.env.NODE_ENV || 'development';
const dotEnvOptions = path.join(process.cwd(), `.env.${nodeEnv}`);

export { dotEnvOptions };
