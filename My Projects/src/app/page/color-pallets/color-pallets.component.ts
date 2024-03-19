import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTableCells, faPlus } from '@fortawesome/free-solid-svg-icons';
extend([mixPlugin]);
@Component({
  selector: 'app-color-pallets',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FontAwesomeModule],
  templateUrl: './color-pallets.component.html',
  styleUrl: './color-pallets.component.scss'
})
export class ColorPalletsComponent {

  public faTableCells = faTableCells;
  public faPlus = faPlus;
  public colorPallet: Array<any> = [];
  public colorShades: Array<any> = [];
  constructor() {
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

  public leftSide() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    this.colorPallet.pop();
    this.colorPallet.unshift(color);
  }

  public rightSide() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    this.colorPallet.shift();
    this.colorPallet.push(color)
  }

  public getShades(color: any) {
    console.log(color);
    this.colorShades = color
    const colors = colord(color);
    this.colorShades = colors.shades(10).map((c: any) => c.toHex());
    console.log(this.colorShades);

  }

}
