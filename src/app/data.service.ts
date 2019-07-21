import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string="http://localhost:8090/postmanager/api/posts/";

  constructor(private httpClient:HttpClient) { }

get_posts(){
    return this.httpClient.get(this.baseUrl+'/all');
}

update_comment(){
  return this.httpClient.get(this.baseUrl+'/1/comment //1');
}



}