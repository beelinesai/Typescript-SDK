export type UnifiedResponse<T> = {
  result: T | null;
  errors: Error[];
  success: boolean;
};

export type UnwrapData<D> = D extends object ? D[keyof D] : D;

export type WrappedSdk<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => Promise<infer R>
    ? R extends { data: infer D }
      // ? (...args: A) => Promise<UnifiedResponse<UnwrapData<D>>>
      ? (...args: A) => Promise<UnwrapData<D>>
      : T[K]
    : T[K];
}; 