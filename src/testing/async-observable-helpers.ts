import { defer } from 'rxjs';

/**
 * Create async observable that emits-once and completes
 * after a JS engine turn
 */
// tslint:disable-next-line: typedef
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

/**
 * Create async observable error that errors
 * after a JS engine turn
 */
// tslint:disable-next-line: typedef
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}
