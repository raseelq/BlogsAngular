import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Observable} from 'rxjs';
import { TokenService } from '../login/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private posts  = []; 
  private postsObservable : Observable<any[]> ; 
  username:string;
  isShown:boolean=false;
  constructor( private apiService:ApiService, private tokenService:TokenService, private router: Router) { 

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
     this.username = this.tokenService.getUsername();
  
  };

  userLogout () {
    this.tokenService.clearToken();
    this.router.navigate(['login']);
    
  }

  onKey(value) {
    this.apiService.search(value).subscribe((data: any[]) =>{
      this.posts = data;
    },
    (error) => {
      alert("Technical Error")
      console.log(error)
    })
    console.log(value)
  }

  
}


