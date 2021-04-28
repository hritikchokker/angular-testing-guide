import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHelperService {

  constructor() { }

  returnsPromise(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
