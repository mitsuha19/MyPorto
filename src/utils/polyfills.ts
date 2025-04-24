// src/utils/polyfills.ts
export {};

declare global {
  interface PromiseConstructor {
    withResolvers<T>(): {
      promise: Promise<T>;
      resolve: (value: T) => void;
      reject: (reason?: any) => void;
    };
  }
}

if (!Promise.withResolvers) {
  // cast ke any supaya assignment diterima TS
  (Promise as any).withResolvers = function <T>() {
    let resolve!: (value: T) => void;
    let reject!: (reason?: any) => void;
    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}
