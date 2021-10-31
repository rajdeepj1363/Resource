import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Router } from '@angular/router';
export class Items {
  constructor(
    public item_name: string,
    public item_type: string,
    public item_description: string,
    public item_cost: string
  ) { }
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  itemData: any;
  title = "Manage Item";

  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit(): void {
  }

  openItem() {
      this.router.navigate(['/add-item']);
  }

  export(){
  }

  deleterow(id) {
  }
}
