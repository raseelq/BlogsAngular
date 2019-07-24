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
  model: any = {};
  submitted = false;

  constructor(private modalService: NgbModal, private apiService: ApiService, private router:Router) {}

 
  openXl(content) { 
    this.modalService.open(content, {size: 'xl'}); 
    if(this.mode=="newBlog")  {
      this.blogForm = new FormGroup({
        title: new FormControl("",  Validators.compose(
          [Validators.minLength(5), Validators.required])),
        content: new FormControl("", Validators.required)
      });
    } else if(this.mode=="edit")  {
      this.blogForm = new FormGroup({
        title: new FormControl(this.post.title, Validators.required),
        content: new FormControl(this.post.content, Validators.required)
      });
    } else {
        this.blogForm = new FormGroup({
          firstName: new FormControl("",  Validators.compose(
            [Validators.minLength(5), Validators.required])),
          lastName: new FormControl("", Validators.required),
          username: new FormControl("", Validators.required),
          password:new FormControl("", Validators.required)
        });

      }
    }
  

  
  ngOnInit() {
    if(this.mode =="newBlog")  {
      this.blogForm = new FormGroup({
        title: new FormControl("", Validators.compose(
          [Validators.minLength(5), Validators.required])),
        content: new FormControl("", Validators.required)
      });
    } else if(this.mode=="edit"){
      this.blogForm = new FormGroup({
        title: new FormControl(this.post.title, Validators.required),
        content: new FormControl(this.post.content, Validators.required)
      });
    }
      else{
        this.blogForm = new FormGroup({
          firstName: new FormControl("",  Validators.compose(
            [Validators.minLength(5), Validators.required])),
          lastName: new FormControl("", Validators.required),
          username: new FormControl("", Validators.required),
          password:new FormControl("", Validators.required)
        });

      }
    }
  
  get blogControls() { return this.blogForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.blogForm.invalid) {
      return;
  } 
  
  else{
    
    if(this.mode =="edit") {
     {
      let title = this.blogForm.get(["title"]).value;
      let content = this.blogForm.get(["content"]).value;
    //  if(this.blogForm.invalid){alert("missing field");}
    // else{
      this.apiService.editPost(this.post['id'], title, content).subscribe((data)=> {
        window.location.reload();
      },
      (error) => {
        alert("Techincal Error");
        console.log(error)
      }
      )
    }}  
      else  {
      
            let title = this.blogForm.get(["title"]).value;
            let content = this.blogForm.get(["content"]).value;
          // if(this.blogForm.invalid){alert("missing field");}
          // else{
            this.apiService.createPost(title, content).subscribe((data)=> {
              window.location.reload();
            },
            (error) => {
              alert("Techincal Error");
              console.log(error)
            }
            )}
           
          }
      }
    

    Register(){
      this.submitted = true;
      if (this.blogForm.invalid) {
        return;
    } else{
      let firstname=this.blogForm.get("firstName").value;
      let lastname=this.blogForm.get("lastName").value;
      let username=this.blogForm.get("userName").value;
      let password=this.blogForm.get("userName").value;
      console.log(firstname);
      console.log(lastname);
      console.log(username);
      console.log(password);

    }
  }

}