import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { TokenService } from './login/token.service';

@Injectable()
export class ApiService {

  baseUrl:string="/postmanager/api/secure/posts";
  constructor(private httpClient:HttpClient, private tokenService:TokenService) { }

  getPosts(){
    let headers =  new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.tokenService.getToken()
    })
    return this.httpClient.get(this.baseUrl+'/all', { headers });
  }
  getMyPosts(){
    let headers =  new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.tokenService.getToken()
    })
    return this.httpClient.get(this.baseUrl+'/own', { headers });
  }


  
  commentPosts(){

    return this.httpClient.get(this.baseUrl+'/1/comment//1');
  }


   
}
