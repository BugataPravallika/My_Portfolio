const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

export const getApiBaseUrl = () => {
  const fallbackUrl = 'http://localhost:5000';
  const envUrl = import.meta.env.VITE_API_URL || fallbackUrl;
  return trimTrailingSlash(envUrl);
};

export const getApiUrl = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getApiBaseUrl()}${normalizedPath}`;
};
