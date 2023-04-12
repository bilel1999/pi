import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import {User} from '../Model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3003/User';
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
};
constructor(private http: HttpClient) { }


getAll(): Observable<User[]> {
  return this.http.get<User[]>(this.url+"/showUser",this.httpOptions);
}

create(data: any): Observable<any> {
  return this.http.post(this.url+"/addUser", data,this.httpOptions);
}
  
public setRoles(roles: []) {
  localStorage.setItem('roles', JSON.stringify(roles));
}

public getRoles(): [] {
  return JSON.parse(localStorage.getItem('roles') as any);
}
login(data: any): Observable<any> {
  return this.http.post(this.url+"/login", data,this.httpOptions);
}

public setToken(jwtToken: string) {
  localStorage.setItem('jwtToken', jwtToken);
}

  
public setuser(user: []) {
  localStorage.setItem('user',JSON.stringify(user));
}

findByNom(nom: any): Observable<User[]> {
  return this.http.get<User[]>(this.url+"/getBynom/"+nom,this.httpOptions);
}

get(id: any): Observable<User> {
  return this.http.get<User>(`${this.url}/showUser/${id}`,this.httpOptions);
}
// getDoctors(): Observable<any> {
//   return this.http.get<any>(`${this.url}/doctors`);
// }
  // public register(loginData:any) {
  //   return this.httpclient.post(this.PATH_OF_API + '/registerNewUser', loginData, {
  //     headers: this.requestHeader,
  //   });
  // }

  
  // public deletaccount(userName:string){
  //   return this.httpclient.delete(this.PATH_OF_API + `/deleteAccount/${userName}`,this.httpOptions);
  // }

  

  

  // public forUser() {
  //   return this.httpclient.get(this.PATH_OF_API + '/forUser', {
  //     responseType: 'text',
  //   });
  // }


  

  // public roleMatch(allowedRoles:any): boolean | any {
  //   let isMatch= false;
  //   const userRoles: any = this.userAuthService.getRoles();

  //   if (userRoles != null && userRoles) {
  //     for (let i = 0; i < userRoles.length; i++) {
  //       for (let j = 0; j < allowedRoles.length; j++) {
  //         if (userRoles[i].roleName === allowedRoles[j]) {
  //           isMatch = true;
  //           return isMatch;
  //         } else {
  //           return isMatch;
  //         }
  //       }
  //     }
  //   }
  // }
}
