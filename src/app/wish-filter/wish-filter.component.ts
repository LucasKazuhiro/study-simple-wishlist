import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WishItem } from '../shared/models/wishItem';


const filter = [
  (item:WishItem) => true,
  (item:WishItem) => !item.isComplete,
  (item:WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<any>()

  ngOnInit(): void{
    this.changeFilter(0)
  }

  listFilter:any = '0'

  changeFilter(value: any){
    this.filter.emit(filter[value])
  }
}
