import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.page.html',
  styleUrls: ['./construction.page.scss'],
})
export class ConstructionPage implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  Contract: any = ['Full Contract','Labour Contarct']
  Area: any = ['Town','Village']


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        sqrft: ['', Validators.required],
          budget: ['', Validators.required],
          months: ['', Validators.required],
          contract: ['', Validators.required],
          area: ['', Validators.required],
          notes: ['', Validators.required]



      });
        
    }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.registerForm.invalid) {
          return;
      }else{
         console.log(this.registerForm.value);

      }

  }
}

