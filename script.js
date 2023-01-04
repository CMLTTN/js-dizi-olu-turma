// // // // // // let ad = prompt("isim gir : ");
// // // // // // let ogrno = prompt("no gir : ");
// // // // // // let cinsiyet = prompt("cins : ");
// // // // // // let ders = prompt("ders adi");
// // // // // // let not1 = prompt("not1:");
// // // // // // let not2 = prompt("not2 :"); 

// // // // // // let ortalama = (Number(not1) + Number(not2)) /2;
// // // // // // console.log(ogrno + " numarali " + ad+"("+cinsiyet+")"+ "isimli öğrencinin"+ ders + "dersinden aldığı ortalama" + ortalama);
// // // // // let a = prompt("a sayi gir : ");
// // // // // let b = prompt("b sayi gir : ");
// // // // // let c = prompt("c sayi gir : ");

// // // // // console.log("a sayisi en büyük mü ? :", (a>b) && (a>c));
// // // // // console.log("b sayisi en büyük mü ? :", (b>a) && (b>c));
// // // // // console.log("c sayisi en büyük mü ? :", (c>a) && (c>b));
// // // // let marka = "toyota";
// // // // let model = "corolla"
// // // // let otamatik = "yes"

// // // // if(otamatik=="yes"){
// // // // console.log("araç otamatiktir.");
// // // // } else{

// // // //     console.log("araç otamatik değildir");
// // // // }
// // // // otamatik = true;
// // // // if(otamatik){

// // // //     console.log(marka+' '+model+'otamatik');
// // // // }
// // // // if(10==='10'){
// // // //     console.log('sayilar esit');
// // // // }

// // // // let dogum = prompt("dogum yili gir : ");
// // // // let yil = 2023;
// // // // let yas = yil - dogum;
// // // // // console.log(yas);
// // // // if(yas<18){

// // // //     console.log("ehliyet alamaz");
// // // //     console.log("ehliyet için   "+(18-yas)+"  sene beklemelisin");
// // // // }
// // // // else if(yas>=18){
// // // //     console.log("ehliyet alabilir");
// // // // } else{
// // // //     console.log("yanlis deger girme");
// // // // }
// // // // let ay = "1"; 
// // // // switch(ay){
// // // //     case "1":
// // // //         console.log("kış mevsimi");
// // // // }
// // // for (let i = 0; i<=1000; i++){
// // //     console.log(i);
// // // }
// // // let sehirler =


// // var i=0;
// // while(i<=10){
// //     console.log(i);
// //     i++
// // }
// for (let i=10; i<=100;i+2){
//     console.log(i);
// }
// const marka = ["Opel", "Toyota", "Mazda","Renault"]
// console.log(marka[3]);
// const model = new Array("corsa", "corolla","CX-3","clio" );
// console.log(model[3]);
// model[0]="Astra";
// console.log(model);
// let auris = ["toyota","auris",52, true];
// auris.push('gray');
// auris.unshift('HB');
// auris.pop();
// auris.shift();
// console.log(auris);
// for(let i=0; i<marka.length;i++){
//     console.log(marka[i]);
// }
//  if(marka.indexOf('mercedes')!==-1){

//     console.log("bulundu");
//  } else{
//     console.log("aranılan kaelime bulunamadı");
//  } 
//  let now = 2023;
//  let models = ["Opel", "Toyota", "Mazda","Renault"];
//  let years = ["2015","2021","2012","2010"] ;
// //  for(let i=0;i<models.length;i++){
// //     console.log(models[i]);
// //  }
// for(let i=0; i<models.length;i++){
// // onsole.log(models[i]+ '  '+years[i]+'model ve'+(now-years[i]+'yasinda bir aractir');


// }
// // const2 names = ["ali","ahmet","cemal","imren","selahaddin","selo","veli","deli","lülü","cdo"];
 

//  const emptArr = []
//  console.log(emptArr);
//  const codingLangs = new Array("C","C++","JS","Go")
//  console.log(codingLangs);
//  const numbers = new Array(3,2,1)
//  console.log(numbers);
//  const numbers1 = new Array(10)
//  console.log(numbers1);
//  console.log(names[4]);
//  const selahaddin = names[4]
//  console.log(selahaddin);
//  const lastEl= names[names.length-1]
//  console.log(lastEl);
//  console.log(names.at(-1));
//  names[4] = "CEMALETTIN"
//  console.log(names[4].toUpperCase = "SELAHADDIN");
 
//  console.log(names);
//  const ageArr = []
 const names = ["ali","ahmet","cemal","imren","selahaddin",,"veli","deli",,"cdo"];
 console.log(names.pop());
 console.log(names);
 console.log("LEN:",names.push("ömer")); 
 console.log(names);
 console.log(names.unshift("abuzer")); 
 console.log(names);
 console.log(names.shift()); 
 console.log(names);
 //? 0 ekleme 1 üzerine yazma
 names.splice(1,0,"zehra")
 console.log(names);
 names.splice(8,1,"akıllı");
 console.log(names);
 names.reverse();
 console.log(names);
 //? sayısal değere bakmaz (sort yömtemi) stringlerde iyi fakat rekamlarda problem çıkar --egzantrik bir metod
 const numbers2 = [29,51,8,9,63,4,71,30,12,3,2,1,];
 numbers2.sort()
 console.log(numbers2);
 names.sort()
 console.log(names);
 numbers2.sort((a,b)=>a-b)
 console.log(numbers2);
 numbers2.sort((a,b)=>b-a)
 console.log(numbers2);













