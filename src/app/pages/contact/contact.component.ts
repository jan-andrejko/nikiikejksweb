import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  form = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    textarea: ['',[Validators.required]],
  })

  ngOnInit() {
  }
}
