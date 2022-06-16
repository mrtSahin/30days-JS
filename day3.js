/**
 * Truthy values
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true

Falsy values
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string
 */

let firstName
console.log(firstName) //undefined. değişken hiç var olmadı

let empty = null
console.log(empty) // null. değişken bellekte var ama referansı yok.

/**
 * Arithmetic Operators
Arithmetic operators are mathematical operators.

Addition(+): a + b
Subtraction(-): a - b
Multiplication(*): a * b
Division(/): a / b
Modulus(%): a % b
Exponential(**): a ** b
 */


console.log(3 == '3')   // true, sadece değerleri karşılaştırır
console.log(3 === '3')  // false, hem değeri hem de veri tipini karşılaştırır



//ternary operators . if-else yerine kullanılabilir
let isRaining = true

isRaining ? console.log("Yanına şemsiye al") : console.log("Şemsiye alma")

isRaining=false

isRaining 
? console.log("Yanına şemsiye al") 
: console.log("Şemsiye alma")


//alert mesaj
//alert("aAAaaAAaaa")

//promt metodu
// let girdi = prompt("Bişey yazsana","sayı girilmedi") // kullanıcıdan girdi almak için kullanılabilir ama kullanışlı değil alert metod gibi yukarıdan geliyor
// console.log("girilen "+girdi)


//confirm metodu
// let emin=confirm('silmek istediğine emin misin')
// console.log(emin ?"silmek için eminmiş".toUpperCase() :"vazgeçti".toUpperCase())

//console.log(window)  // diğer tüm window metodları


// date
let date1 = new Date()
console.log(date1)
console.log(date1.getHours())
let date2= new Date().getMonth()
console.log(date2)// 0 dan saymaya başladığından 6. aydaysak 5 getirecektir

// okunabilir tarih
const date=new Date()

let year=date.getFullYear(),
    monthNumber=date.getMonth(),
    day=date.getDate()
    dayNumber=date.getDay(),
    hour=date.getHours(),
    minute=date.getMinutes(),
    second=date.getSeconds()

let months=[
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
]

let days=[  //0. gün için pazar ı kabul ediyor
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
]

let humanReadableDate=`${day} ${months[monthNumber]} ${year} ${days[dayNumber]} ${hour}:${minute<10 ?"0"+minute:minute}:${second<10 ?"0"+second:second}`
console.log(humanReadableDate)


//prompt ile dik kenar uzunlukları alınan üçgenin hipotenüsünü bulma
// let height=prompt("1. kenar uzunluğunu giriniz")
// let base=prompt("2. kenar uzunluğunu giriniz")
// let hipotenus=Math.sqrt((height**2)+(base**2))
// alert(`hipotenüs uzunluğu: ${hipotenus}`)

//isim 7 karakterden uzunsa ismin uzun kısa ise ismin kısa yazdır
let isim="Murat"
isim.length<7 ?console.log("İsmin kısa") : console.log("İsmin uzun.")



//kişiden doğum yılını al ve ehliyet alabilecek yaşta olup olmadığını söyle
// let yasi=prompt("doğum yılınızı giriniz")
// let nowYear=new Date().getFullYear()
// //console.log(typeof nowYear)  // number
// nowYear-parseInt(yasi)<18 ?console.log("18 yaşından küçüksün ehliyet alamazsın") :console.log("Ehliyet alabilirsin")









