import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/common/header/header.component';

@Component({
  selector: 'app-color-pallets',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './color-pallets.component.html',
  styleUrl: './color-pallets.component.scss'
})
export class ColorPalletsComponent {


  public colorPallet: Array<any> = [];

constructor(){
  this.generateColor()
}

  public generateColor() {
    this.colorPallet = []
    for (let i = 0; i < 5; i++) {
      let newColors = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
      this.colorPallet.push(newColors);
    }
    console.log(this.colorPallet);


  }
}
