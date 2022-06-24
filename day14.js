// error handling
// hata kullanımı

// JS tip korumalı bir dil olmadığından bazen tip uyuşmazlığı yaşanıyor ve runtime error a neden oluyor
// hata kontrolü yapabilmek için JS de try-catch-finally blokları vardır

// try {
//      hata oluşturma potansiyeline sahip kod
// } catch (err) {
//      hata gerçekleşirse çalışacak kod bloğu
// } finally {
//      her halükarda çalışacak olan kod bloğu. hatanın varlığı önemsizdir.
// }



try {
    let isim ="Murat"
    let timIsim = isim+" "+lastName
}catch(hata){
    console.log(hata) // ReferenceError: lastName is not defined at day14.js:19:28
}finally{
    console.log("Her halükarda çalışırım. Hata varmış yokmuş umrumda değil")
}



try {
    let isim ="Murat"
    let tamIsim = isim+" "+lastName
}catch(err){ // kodun herkes tarafından okunabilirliğini artırmak için ingilizce tanımlarda bulunuruz. bu yüzden burda hatayı alan parametreyi error, err ya da e şeklinde tanımlarız
    console.log("%cHata ismi:",'color:red',err.name) // burda aldığımız parametre bir objedir. 
    console.log("%cHata mesajı:",'color:red',err.message) // bu objenin bir ismi ve mesajı vardır
}finally{
    console.log("Her halükarda çalışırım. Hata varmış yokmuş umrumda değil")
}


// hata türleri

// ReferenceError: referans hatası. bir değişkeni tanımlamadan kullanmaya çalıştığımızda meydana gelir
// let isim = 'Murat'
// let tamIsim = isim + ' ' + soyad

// console.log(fullName)

// SyntaxError: java script in yazım kurallarına uymayan durumlarda meydana gelir
// let carpim = 2 x 2 // JS de çarpım işlemi için x değil * kullanılır
// console.log(carpim)

// console.log('Hello, world") // metinler '' içeriisnde ya da "" içerisinde olur '" içerisinde olamaz


// TypeError:
// let num = 10
// console.log(num.toLowerCase()) // Uncaught TypeError: num.toLowerCase is not a function
// .toLowerCase()  bir integer metodu değildir. string metdoudur. bu yüzden tip hatası verir

