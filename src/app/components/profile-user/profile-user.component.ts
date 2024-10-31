import { Component } from '@angular/core';
import { UserInfoComponent } from './components/user-info/user-info.component'; 
import { OrderHistoryComponent } from './components/order-history/order-history.component'; 
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [RouterOutlet, RouterLink, UserInfoComponent, OrderHistoryComponent],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css'
})
export class ProfileUserComponent {

}
