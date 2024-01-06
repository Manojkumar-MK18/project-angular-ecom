import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    CartComponent,
    FormsModule,
    HttpClientModule,
  ],
})
export class AppComponent implements OnInit {
  cartList: any = [];
  constructor(private productServices: ProductService) {
    this.productServices.cartAddedSubject.subscribe((res) => {
      this.loadCart();
    });
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.productServices.getCartItemsByCustId(1).subscribe((res) => {
      this.cartList = res.data;
      console.log(res.data);
    });
  }
}
