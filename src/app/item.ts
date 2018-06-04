export class Item {

    firstname:string;
    lastname:string;
    rating:string; 
    category:string; 
    subcategory:string; 
    amount:string;
    timeCreated:number;

    constructor(firstname:string, lastname:string,rating:string, category:string, subcategory:string, amount:string,timeCreated:number){
        this.firstname = firstname;
        this.lastname = lastname;
        this.rating = rating;
        this.category = category;
        this.subcategory = subcategory;
        this.amount = amount;
        this.timeCreated = timeCreated;
    }
}
