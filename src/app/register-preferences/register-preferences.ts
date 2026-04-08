import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-register-preferences',
  imports: [ReactiveFormsModule,MatFormFieldModule],
  templateUrl: './register-preferences.html',
  styleUrl: './register-preferences.scss',
})
export class RegisterPreferences implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
    });
  }

  onSubmit() {
  }
}