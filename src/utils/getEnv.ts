import "dotenv/config"

function getEnv(key: string, defaultValue: string): string {
  const value = process.env[key];
  if (value === undefined) {
    return defaultValue;
  }
  return value;
}

export default getEnv;
