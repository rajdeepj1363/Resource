import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ItemsService } from '../services/items.service';

export class Items {
  constructor(
    public item_name: string,
    public item_type: string,
    public item_description: string,
    public item_cost: string
  ) { }
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Output() itemsdata = new EventEmitter<Items>();
 
  itemData: any;
  public obj: any = {};

   itemsForm = new FormGroup({
    item_name: new FormControl(''),
    item_type: new FormControl(''),
    item_description: new FormControl(''),
    item_cost: new FormControl('')   
  })

  constructor(private router: Router, private fb: FormBuilder, private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  cancel() {
      this.router.navigate(['./items']);
  }

  addItem(){
       this.itemsService.postItemdata(this.itemsForm.value).subscribe();
       console.warn(this.itemsForm.value);
  }

  onSubmit() {
  }
}
