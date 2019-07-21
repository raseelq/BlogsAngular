import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private posts  = []; 
  private postsObservable : Observable<any[]> ; 

  constructor( private apiService:ApiService) { 

    //this.postsObservable = this.apiService.getPosts();

    this.apiService.getPosts().subscribe((res : any[])=>{
      this.posts = res;
  },
  (error)  => {
      alert("Techincal Error");
      console.log(error);
  });
  
  //.subscribe(hero => this.heroes.push(hero));
  // this.apiService.commentPosts().subscribe((res : any[])=>{
    // this.posts = res;
// },
// (error)  => {
    // alert("Techincal Error");
    // console.log(error);
// });
  }
  ngOnInit() {
     
  
  };

  
}


