import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from 'src/app/common/header/header.component';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {

  public loginForm: any;
  public formDetails: any;
  constructor() {

  }

  public submitForm(tdForm: NgForm) {
    this.formDetails = tdForm;
    if (this.formDetails.valid) {
      sessionStorage.setItem("formData", JSON.stringify(this.formDetails.value));
      this.formDetails.reset()
    } else {
      alert("Enter Valid Form Data")
    }
  }
}
