import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "product-list", component: ProductListComponent,
        children: [
            {path: "product-detail", component: ProductDetailComponent},
        ],
    },
    {path: "product-detail", component: ProductDetailComponent},
    {path: "shop-page", component: ShopPageComponent},
    
    {path: "**", component: NotFoundComponent} // route Not Found nên ở cuối cùng
];
