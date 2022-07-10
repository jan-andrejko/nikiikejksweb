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
      cakeName:"Torty 18cm priemer",
      cakeDetails: "Tu nájdete torty s priemerom 18cm, kde je možné si vybrať s viacero príchutí.",
      cakeDescription:"Náplne do tort robím na báze mascarpone + sľahačka v spojení s kvalitnou belgickou čokoládov Callebaut (biela, mliečna), týmto krémom obtieram aj boky torty ( v prípade záujmu aj možnosť výberu nahej torty - viditeľné korpusy). Do torty viem pridať karamel/slaný karamel, ktorý zvýrazní chuť a okrem neho je samozrejmosťou ovocie v každom poschodí (maliny, čučoriedky, jahody, lesné ovocie, višne).",
      cakePrice: 55,
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
