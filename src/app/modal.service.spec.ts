import { Injectable } from '@angular/core';

import { Item } from '../item';
import { Store } from '../store';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  itemList: Store<any>;
  itemDetail: Store<any>;
  
  selectedItem: Item = new Item();

  constructor(private store: Store) { }

  //Get user data
  getData(){
    this.itemList = this.store.list('items');
    return this.itemList;
  }


  //add user data
  insertItem(item: Item){
    this.itemList.push({
      firstname: item.firstname,
      lastname: item.lastname,
      rating: item.rating,
      category: item.category,
      subcategory: item.subcategory,
      amount: item.amount
    });
  }

  //update user data
  updateUser(item: Item){
    this.itemList.update(item.value, 
      {
        firstname: item.firstname,
        lastname: item.lastname,
        rating: item.rating,
        category: item.category,
        subcategory: item.subcategory,
        amount: item.amount
      });
  }

  //delete user data
  deleteItem(value: string){
    this.itemList.remove(value);
  }
}
