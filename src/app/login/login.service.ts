import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  baseUrl:string="/postmanager";

  constructor(private httpClient:HttpClient) { }

authenticate(username: string, password: string){
    let headers: HttpHeaders = new HttpHeaders();
    let body = {username:username, password:password};
    console.log(body)
    return this.httpClient.post(this.baseUrl+'/auth/signin',  body,
    { headers: headers });
}


register(username: string, password: string) {
  let headers: HttpHeaders = new HttpHeaders();
  let body = {username:username, password:password};
  console.log(body)
  return this.httpClient.post(this.baseUrl+'/auth/register',  body,
  { headers: headers });
}


}