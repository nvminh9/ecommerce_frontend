import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "product-list", component: ProductListComponent},
    {path: "product-detail", component: ProductDetailComponent},
    
    {path: "**", component: NotFoundComponent} // route Not Found nên ở cuối cùng
];
