export interface IJwtProvider {
  decode<T = unknown>(token: string): Promise<T | null>;
}
