import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @Input() productList: any[] = [];
  cartObj: any = {
    CartId: 0,
    CustId: 1,
    ProductId: 0,
    Quantity: 0,
    AddedDate: '2024-01-06T10:38:31.624Z',
  };
  constructor(private productServices: ProductService) {}

  ngOnInit(): void {
    this.loadAllProduct();
  }

  loadAllProduct() {
    this.productServices.getAllProducts().subscribe((result) => {
      this.productList = result?.data;
    });
  }

  addSingleItemToCart(productId: number) {
    this.cartObj.ProductId = productId;
    this.productServices.addToCart(this.cartObj).subscribe((data) => {
      if (data.result) {
        alert("Product Added To Cart");
        this.productServices.cartAddedSubject.next(true);
      }
    })
  }
}
