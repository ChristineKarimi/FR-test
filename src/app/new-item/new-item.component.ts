import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Item } from '../item';
import { Store } from '../store';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  //Declare var type to FormGroup
  // itemForm: FormGroup;

  itemForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    category : new FormControl(),
    subCategory : new FormControl(),
    amount : new FormControl(),
    rating:new FormControl(),
   })

  item = Store;

  

  subcategoryList = ['Sports', 'Leisure', 'Office']

  //Adding form builder service to constructor
  // constructor(private fb: FormBuilder) { }

  saveItem(firstname: HTMLInputElement, lastname: HTMLInputElement, rating: HTMLInputElement, category: HTMLInputElement, subcategory: HTMLInputElement, amount: HTMLInputElement,timeCreated?:string): boolean {
    
    let t_secs = new Date();
    // let t_day:number = t_secs.getTime()/1000;
    let t_day = new Date().toLocaleTimeString();

    this.item.push(new Item(firstname.value, lastname.value, rating.value, category.value, subcategory.value, amount.value,t_day));

    t_day=null;
    firstname.value='';
    lastname.value='';
    rating.value='';
    category.value='';
    subcategory.value='';
    amount.value='';

    return false;
  }

  ngOnInit() {
 

  }

}
