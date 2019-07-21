import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string="http://localhost:8090/postmanager/api/posts";

  getPosts(){
    return this.httpClient.get(this.baseUrl+'/all');
}
getMyPosts(){
  return this.httpClient.get(this.baseUrl+'/own');
}


private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
commentPosts(){

  return this.httpClient.get(this.baseUrl+'/1/comment//1');
}


  constructor(private httpClient:HttpClient) { }
}
