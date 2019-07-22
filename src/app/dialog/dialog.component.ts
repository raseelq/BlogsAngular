import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  closeResult: string;
  @Input("name") name:string;
  @Input("post") post:any;
  @Input("mode") mode:string;//by default new
  blogForm: FormGroup;

  constructor(private modalService: NgbModal, private apiService: ApiService, private router:Router) {}

 
  openXl(content) { 
    this.modalService.open(content, {size: 'xl'}); 
    if(this.mode !="edit")  {
      this.blogForm = new FormGroup({
        title: new FormControl("", Validators.required),
        content: new FormControl("", Validators.required)
      });
    } else {
      this.blogForm = new FormGroup({
        title: new FormControl(this.post.title, Validators.required),
        content: new FormControl(this.post.content, Validators.required)
      });
    }
  }

  
  ngOnInit() {
    if(this.mode !="edit")  {
      this.blogForm = new FormGroup({
        title: new FormControl("", Validators.required),
        content: new FormControl("", Validators.required)
      });
    } else {
      this.blogForm = new FormGroup({
        title: new FormControl(this.post.title, Validators.required),
        content: new FormControl(this.post.content, Validators.required)
      });
    }
  }

  onSubmit() {
    if(this.mode =="edit")  {
      let title = this.blogForm.get(["title"]).value;
      let content = this.blogForm.get(["content"]).value;
      this.apiService.editPost(this.post['id'], title, content).subscribe((data)=> {
        window.location.reload();
      },
      (error) => {
        alert("Techincal Error");
        console.log(error)
      }
      )
    }  else {
      let title = this.blogForm.get(["title"]).value;
      let content = this.blogForm.get(["content"]).value;
      this.apiService.createPost(title, content).subscribe((data)=> {
        window.location.reload();
      },
      (error) => {
        alert("Techincal Error");
        console.log(error)
      }
      )
    }
  }

}
