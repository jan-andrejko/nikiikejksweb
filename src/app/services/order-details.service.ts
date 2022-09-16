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
      cakeTaste: ["1. Brownie, krém z mliečnej čokolády, maliny","2. Brownie, smotanový krém s vanilkou, maliny","3. Piškót, smotanový krém s vanilkou, jahody, karamel,","4. Piškót, krém z mliečnej čokolády, višne","5. Mandľa, krém z bielej čokolády, maliny","6. Pistácia, krém z bielej čokolády, jahody","7. Red velvet, cream cheese krém, višne","8. Mak, krém z mliečnej čokolády, višne"],
      cakeDescription:"Náplne do tort robím na báze mascarpone + sľahačka v spojení s kvalitnou belgickou čokoládov Callebaut (biela, mliečna), týmto krémom obtieram aj boky torty ( v prípade záujmu aj možnosť výberu nahej torty - viditeľné korpusy). Do torty viem pridať karamel/slaný karamel, ktorý zvýrazní chuť a okrem neho je samozrejmosťou ovocie v každom poschodí (maliny, čučoriedky, jahody, lesné ovocie, višne).Zdobenie podľa predstavy zákazníka, v prípade zvolenia kvetov bude účtovaný poplatok za kvety. Ovocné zdobenie podľa dostupnosti a sezóny",
      cakePrice: 55,
      cakeImg:'/assets/images/18cm_torta.jpg',
    },
    {
      id:2,
      cakeName:"Torta 20cm priemer",
      cakeTaste: ["1. Brownie, krém z mliečnej čokolády, maliny","2. Brownie, smotanový krém s vanilkou, maliny","3. Piškót, smotanový krém s vanilkou, jahody, karamel,","4. Piškót, krém z mliečnej čokolády, višne","5. Mandľa, krém z bielej čokolády, maliny","6. Pistácia, krém z bielej čokolády, jahody","7. Red velvet, cream cheese krém, višne","8. Mak, krém z mliečnej čokolády, višne"],
      cakeDetails: "Tu nájdete torty s priemerom 20cm, kde je možné si vybrať s viacero príchutí.",
      cakeDescription:"Náplne do tort robím na báze mascarpone + sľahačka v spojení s kvalitnou belgickou čokoládov Callebaut (biela, mliečna), týmto krémom obtieram aj boky torty ( v prípade záujmu aj možnosť výberu nahej torty - viditeľné korpusy). Do torty viem pridať karamel/slaný karamel, ktorý zvýrazní chuť a okrem neho je samozrejmosťou ovocie v každom poschodí (maliny, čučoriedky, jahody, lesné ovocie, višne).Zdobenie podľa predstavy zákazníka, v prípade zvolenia kvetov bude účtovaný poplatok za kvety. Ovocné zdobenie podľa dostupnosti a sezóny",
      cakePrice: 65,
      cakeImg:'/assets/images/torta_20cm.jpg',
    },
    {
      id:3,
      cakeName:"Tartaletky",
      cakeDetails: "Tu nájdete tartaletky s rôznnymi rozmermi. Minimálny odber 15ks",
      cakeTaste: ["1. Biela čokoláda s višňami","2. Čučoriedka","3. Káva s karamelom","4. Mliečna čokoláda so slaným karamelom","5. Pistácia s malinami","6. Karamelová čokoláda","7. Ruby čokoláda"],
      cakeDescription:"Tartaletky sú košícky v cesta do ktorých sa vkladajú príchute napísane vyššie",
      cakePrice: 1.70,
      cakeImg:'assets/images/tartaletky_2022.jpg',
    },
    {
      id:4,
      cakeName:"Cupcake",
      cakeDetails: "Minimálny odber 12ks",
      cakeTaste: ["1. Makový korpus, višňový confit s cheese krémom","2. Vanilkový korpus, malinový confit s tvarohovým krémom","3. Čokoládový korpus, banánový confit s čokoládovým krémom","4. Mliečna čokoláda so slaným karamelom"],
      cakeDescription: "podrobnejšie informácie doplníme neskôr",
      cakePrice: 1.8,
      cakeImg:'/assets/images/cupcaky.jpg',
    },
    {
      id:5,
      cakeName:"Mini pavlovky",
      cakeDetails: "Minimálny odber 10ks",
      cakeTaste: ["1. Vanilkový krém + dekorácia","2. Škorica preliata višňami + dekorácia","3. Pistácia preliata višňami + dekorácia"],
      cakeDescription: "podrobnejšie informácie doplníme neskôr",
      cakePrice: 1.8,
      cakeImg:'/assets/images/mini_pavlovky (1).jpg',
    },
    {
      id:6,
      cakeName:"Sladké poháriky",
      cakeDetails: "Minimálny odber 10ks, 100ml",
      cakeTaste: ["1.New York cheesecake v poháriku","Tiramisu s baileys/káva (alko/nealko)","Panna cotta s mangom/lesným ovocím"],
      cakeDescription: "podrobnejšie informácie doplníme neskôr",
      cakePrice: 2.5,
      cakeImg:'/assets/images/sladke_pohariky.jpg',
    },
    {
      id:7,
      cakeName:"Brownies",
      cakeDetails: "Minimálny odber 15ks",
      cakeTaste: ["Malina s malinou","Karamel s pekanovými/lieskovými orechmi"],
      cakeDescription: "Rozmer brownies je 4,5cm x 4,5cm, kde pri výrobe je použitá kvalitná callebaut čokoláda",
      cakePrice: 1.8,
      cakeImg:'assets/images/brownies.jpg',
    },
    {
      id:8,
      cakeName:"Laskonky",
      cakeDetails: "Minimálny odber 15ks",
      cakeTaste: "1. Oriešok s kávou (maslová plnka)",
      cakeDescription: "podrobnejšie informácie doplníme neskôr",
      cakePrice: 1.7,
      cakeImg:'/assets/images/laskonky.jpg',
    },
    {
      id:9,
      cakeName:"Cheesecake kocky",
      cakeDetails: "Minimálny odber 15ks",
      cakeTaste: ["Kokos s bielou ganache čokoládou","New York cheesecake s mangom","Čokoláda s ganache z mliečnej čokolády","Malinové/lesná zmes želé"],
      cakeDescription: "Cheesecake kocky ponúkam v rozmeroch 5,5cm x 5,5cm, kde je pri výrobe použitá kvalitná belgická callebaut čokoláda",
      cakePrice: 3,
      cakeImg:'assets/images/cheesecake_kocky.jpg',
    },
    {
      id:10,
      cakeName:"Cheesecake 24cm priemer",
      cakeDetails: "12ks (trojuholníkov)",
      cakeDescription: "podrobnejšie informácie doplníme neskôr",
      cakePrice: 45,
      cakeImg:'assets/images/cheesecake_24cm.jpg',
    },
    {
      id:11,
      cakeName:"Cheesecake 20cm priemer",
      cakeDetails: "12ks (trojuholníkov)",
      cakeDescription: "podrobnejšie informácie doplníme neskôr",
      cakePrice: 45,
      cakeImg:'assets/images/cheesecake_20cm.jpg',
    },
  ]
}
