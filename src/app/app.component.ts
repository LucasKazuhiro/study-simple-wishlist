import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { WishItem } from './shared/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items:WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')  
  ];

  visibleItems:WishItem[] = this.items

  title = 'wishlist'
  newWishText = ''
  listfilter:String = '0'

  addNewWish(){
    this.items.push(new WishItem(this.newWishText))
    this.newWishText = ''
  }

  filterChange(value:any){
    switch(Number(value)){
      case 0:
        this.visibleItems = this.items
        break
      
      case 1:
        this.visibleItems = this.items.filter(item => !item.isComplete)
        break

      case 2:
        this.visibleItems = this.items.filter(item => item.isComplete)
        break
    }

  }

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete
  }
}
