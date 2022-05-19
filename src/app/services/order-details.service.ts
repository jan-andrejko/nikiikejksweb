import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  // cakedetails
  cakeDetails = [
    {
      id:1,
      cakeName:"Cupcake",
      cakeDetails: "makovy korpus visnovy confit s cream cheese kremom",
      cakePrice: 1.6,
      cakeImg:'assets/images/cupcake.jpg',
    },
    {
      id:2,
      cakeName:"Sladke pohariky",
      cakeDetails: "New York cheesecake v pohariku",
      cakePrice: 2,
      cakeImg:'assets/images/sladke_pohariky.jpg',
    },
    {
      id:3,
      cakeName:"Mini pavlovky",
      cakeDetails: "vanilkovy krem + dekoracia",
      cakePrice: 2.5,
      cakeImg:'assets/images/mini_pavlovky.jpg',
    },
    {
      id:4,
      cakeName:"Tartaletky",
      cakeDetails: "biela cokolada s visnami",
      cakePrice: 1.5,
      cakeImg:'assets/images/tartaletky.jpg',
    },
    {
      id:5,
      cakeName:"Brownies",
      cakeDetails: "karamel s pekanovymi orechmi",
      cakePrice: 1.8,
      cakeImg:'assets/images/brownies1.jpg',
    },
  ]
}
