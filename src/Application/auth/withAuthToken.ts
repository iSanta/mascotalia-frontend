import { getAuthToken } from "../utils/getAuthToken";

export function withAuthToken(func) {
  const token = getAuthToken();
  if (!token) return;
  return function (...args) {
    return func(...args, token);
  };
}

export function withAuthTokenAsync<T extends (...args: any) => any>(func) {
  const token = getAuthToken();
  if (!token) return;
  return async function (...args): Promise<ReturnType<T>> {
    return await func(...args, token);
  };
}
