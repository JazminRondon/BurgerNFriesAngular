import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


products = [
  {
    "id": 1,
    "name": "cheese burger",
    "brand":"Mcdonalds",
    "inStock": 5,
    "price": 4.00,
    "image": 'https://i.pinimg.com/originals/47/2d/c3/472dc3346c5d2746cac2db4d95cc1e22.png',
    "featured": false,
    "qty": 0
  },
  {
    "id": 2,
    "name": "Hot salty fries",
    "brand":"Burger king",
    "inStock": 10,
    "price": 1.00,
    "image": 'https://pngimg.com/uploads/fries/fries_PNG48.png',
    "featured": false,
    "qty": 0
  },
  {
    "id": 3,
    "name": "Very cold soda",
    "brand":"Cocacola",
    "inStock": 15,
    "price": .50,
    "image": 'https://icon-library.com/images/soda-icon/soda-icon-10.jpg',
    "featured": true,
    "qty": 0
  }
]




increaseQty(product: any){
  product.qty++
}

decreaseQty(product: any){
  product.qty--
}

qtyCount(){
  let sum=0;
  for(let x=0;x < this.products.length; x++){
    sum= sum+this.products[x].qty;
  }
  return sum;
}

totalPrice(){
  let priceTotal = 0
  for(let x=0; x<this.products.length;x++){
    priceTotal=priceTotal+ (this.products[x].price*this.products[x].qty)
  }
  return priceTotal;
}








}
