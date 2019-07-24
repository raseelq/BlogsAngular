import { Component, OnInit } from '@angular/core';
import {Observable, from} from 'rxjs';
import { TokenService } from '../login/token.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';




@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  private posts  = []; 
  private postsObservable : Observable<any[]> ; 
  username:string;
 
  

  constructor(private apiService:ApiService, private tokenService:TokenService, private router: Router) { 
    
    this.apiService.getMyPosts().subscribe((res : any[])=>{
      this.posts = res;
  },
  (error)  => {
      alert("Techincal Error");
      console.log(error);
  });
  }

  ngOnInit() {
    this.username = this.tokenService.getUsername();
  }
  newBlogDialog(){
    
  alert("hello");
    //let blogDialog=this.basicDialog.openXl(Content);
  }

  deletePost(id){
    console.log(id)
  }

  showEditDialog(post) {
    console.log(post)
  }

}
