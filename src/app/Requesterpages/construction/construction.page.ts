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
        sqft: ['', Validators.required],
          budget: ['', Validators.required],
          months: ['', Validators.required],
          contract: ['', Validators.required],
          area: ['', Validators.required],
          notes: ['', Validators.required]



      });
        
    }

  // convenience getter for easy access to form fields
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }else{
         console.log(this.registerForm.value);

      }

  }
}

