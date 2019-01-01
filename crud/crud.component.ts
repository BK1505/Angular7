import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  private btnst: boolean = false;
  private product: any = {};
  private products: any[] = [
    {
      name: 'apple',
      pic: 'https://www.znaturalfoods.com/1501-big_default/apple-powder-organic.jpg',
      cost: 200
    },
    {
      name: 'banana',
      pic: 'https://images.all-free-download.com/images/graphicthumb/banana_quality_picture_167084.jpg',
      cost: 110
    },
    {
      name: 'pineapple',
      pic: 'https://5.imimg.com/data5/YD/VM/MY-27568370/fresh-pine-apple-500x500.jpg',
      cost: 210
    }
  ];
  saveProduct() {
    this.products.push(this.product);
    this.product = {
      name: '',
      pic: '',
      cost: ''
    };
  }

  delProduct(index) {
    this.products.splice(index, 1);
  }

  editProduct(product) {
    this.btnst = true;
    this.product = product;
  }

  constructor() { }

  ngOnInit() {
  }

}
