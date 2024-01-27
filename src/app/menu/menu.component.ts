import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Item } from '../shared/item';
import { DishService } from '../services/dish.service';
import { ItemService } from '../services/item.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes!: Dish[];
  items!: Item[];
  errMess!: string;

  selectedDish!: Dish;
  selectedItem!: Item;

  constructor(private itemService: ItemService,
    @Inject('baseURL') public baseURL: string) { }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe(items => this.items = items,
        errmess => this.errMess = <any>errmess);
  }

  onSelect(item: Item) {
    // this.selectedDish = dish;
    this.selectedItem = item;
  }

}
