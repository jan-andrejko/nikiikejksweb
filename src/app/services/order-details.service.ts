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
      cakeName:"Torta 18cm priemer",
      cakeDetails: "Tu nájdete torty s priemerom 18cm, kde je možné si vybrať s viacero príchutí.",
      cakeDescription:"Náplne do tort robím na báze mascarpone + sľahačka v spojení s kvalitnou belgickou čokoládov Callebaut (biela, mliečna), týmto krémom obtieram aj boky torty ( v prípade záujmu aj možnosť výberu nahej torty - viditeľné korpusy). Do torty viem pridať karamel/slaný karamel, ktorý zvýrazní chuť a okrem neho je samozrejmosťou ovocie v každom poschodí (maliny, čučoriedky, jahody, lesné ovocie, višne).Zdobenie podľa predstavy zákazníka, v prípade zvolenia kvetov bude účtovaný poplatok za kvety. Ovocné zdobenie podľa dostupnosti a sezóny",
      cakePrice: 55,
      cakeImg:'/assets/images/18cm_torta.jpg',
    },
    {
      id:2,
      cakeName:"Torta 20cm priemer",
      cakeDetails: "Tu nájdete torty s priemerom 20cm, kde je možné si vybrať s viacero príchutí.",
      cakeDescription:"Náplne do tort robím na báze mascarpone + sľahačka v spojení s kvalitnou belgickou čokoládov Callebaut (biela, mliečna), týmto krémom obtieram aj boky torty ( v prípade záujmu aj možnosť výberu nahej torty - viditeľné korpusy). Do torty viem pridať karamel/slaný karamel, ktorý zvýrazní chuť a okrem neho je samozrejmosťou ovocie v každom poschodí (maliny, čučoriedky, jahody, lesné ovocie, višne).Zdobenie podľa predstavy zákazníka, v prípade zvolenia kvetov bude účtovaný poplatok za kvety. Ovocné zdobenie podľa dostupnosti a sezóny",
      cakePrice: 65,
      cakeImg:'/assets/images/torta_20cm.jpg',
    },
    {
      id:3,
      cakeName:"Tartaletky",
      cakeDetails: "Minimálny odber 15ks",
      cakeTaste1: "1. Biela čokoláda s višňami",
      cakeTaste2: "2. Čučoriedka",
      cakeTaste3: "3. Káva s karamelom",
      cakeTaste4: "4. Mliečna čokoláda so slaným karamelo",
      cakeTaste5: "5. Pistácia s malinami",
      cakeTaste6: "6. Karamelová čokoláda",
      cakeTaste7: "7. Ruby čokoláda",
      cakeDescription:"Tartaletky sú košícky v cesta do ktorých sa vkladajú príchute napísane vyššie",
      cakePrice: 1.70,
      cakeImg:'assets/images/tartaletky_2022.jpg',
    },
    {
      id:4,
      cakeName:"Cupcake",
      cakeDetails: "Minimálny odber 12ks",
      cakeTaste1: "1. Makový korpus, višňový confit s cheese krémom",
      cakeTaste2: "2. Vanilkový korpus, malinový confit s tvarohovým krémom",
      cakeTaste3: "3. Čokoládový korpus, banánový confit s čokoládovým krémom",
      cakeTaste4: "4. Mliečna čokoláda so slaným karamelom",
      cakeDescription: "podrobnejšie informácie doplníme neskôr",
      cakePrice: 1.8,
      cakeImg:'assets/images/tartaletky.jpg',
    },
    {
      id:5,
      cakeName:"Mini pavlovky",
      cakeDetails: "Minimálny odber 10ks",
      cakeTaste1: "1. Vanilkový krém + dekorácia",
      cakeTaste2: "2. Škorica preliata višňami + dekorácia",
      cakeTaste3: "3. Pistácia preliata višňami + dekorácia",
      cakeDescription: "podrobnejšie informácie doplníme neskôr",
      cakePrice: 1.8,
      cakeImg:'assets/images/brownies1.jpg',
    },
    {
      id:6,
      cakeName:"Sladké poháriky",
      cakeDetails: "Minimálny odber 10ks, 100ml",
      cakeTaste1: "1. New York cheesecake v poháriku",
      cakeTaste2: "2. Tiramisu s baileys/káva (alko/nealko)",
      cakeTaste3: "3. Panna cotta s mangom/lesným ovocím",
      cakeDescription: "podrobnejšie informácie doplníme neskôr",
      cakePrice: 2.5,
      cakeImg:'assets/images/brownies1.jpg',
    },
    {
      id:7,
      cakeName:"Brownies",
      cakeDetails: "Minimálny odber 15ks",
      cakeTaste1: "1. Malina s malinou",
      cakeTaste2: "2. Karamel s pekanovými/lieskovými orechmi",
      cakeDescription: "Rozmer brownies je 4,5cm x 4,5cm, kde pri výrobe je použitá kvalitná callebaut čokoláda",
      cakePrice: 1.8,
      cakeImg:'assets/images/brownies1.jpg',
    },
    {
      id:8,
      cakeName:"Laskonky",
      cakeDetails: "Minimálny odber 15ks",
      cakeTaste1: "1. Oriešok s kávou (maslová plnka",
      cakeDescription: "podrobnejšie informácie doplníme neskôr",
      cakePrice: 1.7,
      cakeImg:'assets/images/brownies1.jpg',
    },
    {
      id:9,
      cakeName:"Cheesecake kocky",
      cakeDetails: "Minimálny odber 15ks",
      cakeTaste1: "1. Kokos s bielou ganache čokoládou",
      cakeTaste2: "2. New York cheesecake s mangom",
      cakeTaste3: "3. Čokoláda s ganache z mliečnej čokolády",
      cakeTaste4: "4. Malinové/lesná zmes želé",
      cakeDescription: "Cheesecake kocky ponúkam v rozmeroch 5,5cm x 5,5cm, kde je pri výrobe použitá kvalitná belgická callebaut čokoláda",
      cakePrice: 3,
      cakeImg:'assets/images/brownies1.jpg',
    },
    {
      id:10,
      cakeName:"Cheesecake 24cm priemer",
      cakeDetails: "12ks (trojuholníkov)",
      cakeDescription: "podrobnejšie informácie doplníme neskôr",
      cakePrice: 45,
      cakeImg:'assets/images/brownies1.jpg',
    },
    {
      id:11,
      cakeName:"Cheesecake 20cm priemer",
      cakeDetails: "12ks (trojuholníkov)",
      cakeDescription: "podrobnejšie informácie doplníme neskôr",
      cakePrice: 45,
      cakeImg:'assets/images/brownies1.jpg',
    },
  ]
}
