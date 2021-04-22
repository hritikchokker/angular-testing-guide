import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModule } from '../users.module';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersList: any[] = [];
  // constructor(private _http: HttpClient) { }

  // fetchUsers(): Observable<any[]> {
  //   return this._http.get('https://jsonplaceholder.typicode.com/albums/1/photos')
  //     .pipe(map((data: any) => data));
  // }
}
