import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  baseUrl:string="http://localhost:8090/postmanager";

  constructor(private httpClient:HttpClient) { }

authenticate(username: string, password: string){
    let headers: HttpHeaders = new HttpHeaders();
    let body = {username:username, passowrd:password};
    return this.httpClient.post(this.baseUrl+'/auth/signin',  body,
    { headers: headers, withCredentials: true });
}





}