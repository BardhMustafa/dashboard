export const isTokenExpired =(expirationTime: number): boolean => {
  const currentTime = Math.floor(Date.now() / 1000);
  return expirationTime < currentTime;
}