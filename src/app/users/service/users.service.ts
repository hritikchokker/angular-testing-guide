import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserHelperService } from './user-helper.service';
import { UsersModule } from '../users.module';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUrl = 'app/users';
  usersList: any[] = [];
  constructor(private _http: HttpClient,
    private _userHelper: UserHelperService) { }

  getUsers(): Observable<any> {
    return this._http.get(this.userUrl);
  }
  getUserDetail(id: string): Observable<any> {
    return this._http.get(this.userUrl + id);
  }

  getFakePromise(): Promise<any> {
    return this._userHelper.returnsPromise().then(_ => Promise.resolve('fake Promise'));
  }
  // fetchUsers(): Observable<any[]> {
  //   return this._http.get('https://jsonplaceholder.typicode.com/albums/1/photos')
  //     .pipe(map((data: any) => data));
  // }
}
