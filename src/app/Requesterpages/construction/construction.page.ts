import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.page.html',
  styleUrls: ['./construction.page.scss'],
})
export class ConstructionPage implements OnInit {


 id:any =localStorage.getItem("id");
  constructionForm: FormGroup;
  submitted = false;
  Contract: any = ['Full Contract','Labour Contarct']
  Area: any = ['Town','Village']

  
  constructor(private formBuilder: FormBuilder,private router:Router,private http:HttpClient,private api:ApiService) { }

  ngOnInit() {
      this.constructionForm = this.formBuilder.group({
        sqrft: ['', Validators.required],
          budget: ['', Validators.required],
          months: ['', Validators.required],
          contract: ['', Validators.required],
          area: ['', Validators.required],
          notes: ['', Validators.required]



      });
        
    }

  get f() { return this.constructionForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.constructionForm.invalid) {
          return;
      }else{
        console.log(this.id);
        
      let Post:any={
          sqrft:this.constructionForm.value.sqrft,
          budget:this.constructionForm.value.budget,
          months:this.constructionForm.value.months,
          contract:this.constructionForm.value.contract,
          area:this.constructionForm.value.area,
          notes:this.constructionForm.value.notes,
          user_id:this.id

        }
      
         console.log(this.constructionForm.value);
         this.api.construction(Post).subscribe((res)=>{
          console.log(res);
          this.router.navigateByUrl('home')
        })

      }

  }
}

