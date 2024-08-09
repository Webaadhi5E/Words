import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { HoverHighlightDirective } from 'src/app/hover-highlight.directive';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [HeaderComponent, NgClass, FormsModule, HoverHighlightDirective],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {

  public title = signal<string>("Angular Interview Prepare with all Concepts");
  public isTitleReady: boolean = true;
  public subTitle: string = "";
  public mainProductList: any;
  public displayProductsList: Array<any> = [];
  protected http = inject(HttpClient);
  constructor() {
    // this.displayProductsList = Array.from(Array(10).keys());
    this.getProductData()
  }
  public displayDynamicTitle() {
    this.isTitleReady = !this.isTitleReady;
  }

  public getProductData() {
    this.http.get('https://dummyjson.com/products').subscribe((data: any) => {
      this.getProductsDataResponse(data)
    })
  }

  public getProductsDataResponse(res: any) {
    this.mainProductList = res.products;
    this.displayProductsList = this.mainProductList;
    console.log(this.displayProductsList);
  }


}
