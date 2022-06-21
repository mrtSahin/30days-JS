//higher order function


const funksiyon = number => number**2

function cube(funktion, number){
    return funktion(number)*number // fonksityon içerisinde fonksiyon kullanma
}
console.log(cube(funksiyon,4))



const a=s1=>{
    const b =s2 =>{
        const c=s3=>{
            return s1+s2+s3 // c fonksiyonu bu işlemi b fonksiyonuna döndürdü
        }
        return c //b fonksiyonu c fonksiyonundan gelen değeri a fonksiyonuna döndürdü
    }
    return b // en son a fonksiyonu b foksiyonundan gelen değeri döndürdü
}
console.log(a(5)(10)(15))


// foreach
const numbers =[1,2,4,5,7,8]
let total = 0
let carpimSonuc=1
numbers.forEach(number => { // numbers içerisindeki her bir eleman sırasıyla number değişkenine atılıyor
    total+=number // her bir eleman için bu işlem yapılıyor
});
//numbers.forEach(number=>total+=number) // tek satırlık bir işlem olduğğunda dolayı buşekilde de yazabilirdik
console.log(total)
// gördüğümüz gibi foreach da içerisinde bir arrow fonksiyon alıyor. u nedenleforeach da bir higher order funciton dır
const carpim=(sonuc,gelen) =>{
    return sonuc*=gelen
}
numbers.forEach(number => carpimSonuc=carpim(carpimSonuc,number))
console.log(carpimSonuc)


/// js de bir fonksiyonu istediğimiz aralık ya da kaç saniye sonra çalışacağını belirleyip çalıştırabiliyoruz

function sayHello(){
    console.log("Hello")
}

//setInterval metodu ile kaç saniye ralıklarla çalışcağını belirleyebiliriz
//setInterval(sayHello,1000) // süreyi milsaniye cinden yazarız

// setInterval(() => { // bu şekilde içerisine arrow fonksiyon yazarak da yapabiliriz
    
// }, aralık);


//setTimeout ile site yüklsendikten kaç saniye sonra çalışacağını belirleyeilirzi
setTimeout(()=>console.log("Naber"),3333)



// 5 saniye sonra setInterval metdounun durdurulması
//clearInterval
//clearTimeout
const interval = setInterval(sayHello,1000)//setIntervalin referansına erişebilmek için bir değişkene atıyoruz
const timeOut= setTimeout(()=>{
    clearInterval(interval)  
    console.log("interval durduruldu")
},5000)


// setTimeout(()=>{
//     clearTimeout(timeOut)
//     console.log("intervali durduracak olan timeOut iptal edildi. o yğzden interval devam edecek")
// },3000)




// js de karmaşık işlemlerimiz kolaylaştırmak için yerleşik fonksiyonlar vardır.
// bu fonksiyonlar higher order fonksiyonlardır. yani parametre olarak başka bir fonksiyon alırlar 
// forEach() Metodu
// map() Metodu
// filter() Metodu
// reduce() Metodu
// every() Metodu
// ome() Metodu
// find() Metodu
// findIndex() Metodu
// sort() Metodu



let  products =[
    {id:1, name:"Monster", unitPrice:21000},
    {id:2, name:"Asus", unitPrice:23000},
    {id:3, name:"HP", unitPrice:16000},
    {id:4, name:"Lenovo", unitPrice:33000},
]

//map ile array içerisinde gezebiliyoruz. foreach gibi
// map bize yeni bir array döndürür
console.log(".map() ile array içerisinde gezme")
products.map(urun => {
    let fiyat =urun.unitPrice
    console.log(urun.id+" urun fiyatı "+fiyat)
})

//dizi içerisindeki sayıların karesini almak için de kullanabiliriz
//yeni dizi içerisinde gezmemizi gerektirecek yerlerde kullanabiliriz
const numberS = [1, 2, 3, 4, 5]
const numbersSquare = numberS.map((num) => num * num)
console.log(numbersSquare)


// filter ile filtrelem işlemi yaparız(adı üstünde)
// filter bize yeni bir array döndürür
console.log(".filter() ile filtreleme")
let filteredProducts = products.filter(urun => urun.unitPrice>22000)
console.log(filteredProducts)

//reduce
console.log(".reduce() ile toplama")
let toplam = products.reduce((acc,urun)=> acc+urun.unitPrice,0)
console.log(toplam)

//every
//dizi içerisindeki her bir değerin bizim belirlediğimiz koşulu sağlayıp sağlamadığını kontrol ediyor
let isString =products.every(urun=>{
    return typeof urun.name == 'string' // bütün urunlarin urun.name 'inin string olup olmadığına bakar
}) // bir tanesi bile karşılamıyosa false döndürüyor.
console.log("hepsinin isminin türü string mi "+isString)

let isExpensiveAll = products.every(urun => urun.unitPrice>25000)
console.log("Hepsi pahalı mı "+isExpensiveAll) // hayır hepsi 25000 den pahalı değil


//some
// every nin logic or(veya) lu olanı 
// every logic and(ve) ile çalışır. yani hepsinin koşulu sağlaması gerekir
// some da veya ile çalıştığından sadece bir tanesi bile karşılasa true döndürür.
let isExpensiveSome= products.some(urun => urun.unitPrice>25000)
console.log("Pahalı olan var mı "+isExpensiveSome)


//find 
// koşulu sağlayan ilk elemanı döndürür işlemi bitirir
let num=[5,8,'4',3,'56']
let str = num.find(sayilar=> typeof sayilar=='string')
console.log(str)

//findIndex
// find direkt değeri dondürürken findIndex indexini döndürür




//sort 
// dizi elemanlarını sıralamk için kullanılır. sıralayacağı lemanları string e çevirerek sıralama yapar
// sayılar için sadece .sort() kullanarak sıralama yapmaz
let isimler=["Murat","Kadir","Tayfun"]
console.log(isimler.sort()) // ['Kadir', 'Murat', 'Tayfun']

const numarlar= [4,6,8,0,1,9,8,84,32,3.02]
console.log(numarlar.sort())  // [0, 1, 3.02, 32, 4, 6, 8, 8, 84, 9]
console.log(numarlar.sort((a,b)=>a-b)) // küçükten büyüğe
console.log(numarlar.sort((a,b)=>b-a)) // büyükten küçüye
// sıralamada, objeler içinde buna benzer işler yapıyoruz
console.log(products.sort((a,b)=>b.id-a.id)) // id ye göre büyükten küçüğe sıralar





