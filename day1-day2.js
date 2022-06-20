console.log("bu yazı introduction.js den geldi")
 
console.log(typeof "Murat")
console.log(typeof 5)
console.log(typeof 8.89)
console.log(typeof true)
console.log(typeof {id:24})
console.log(typeof undefined)
console.log(typeof null)

console.log(Math)

let str="murat"
console.log(str.split('').reverse()) // ['t', 'a', 'r', 'u', 'm']
console.log(str.includes('a')) // true
console.log(str.replace('u','Q')) // mQrat
console.log(str.substring(1,4)) // ura

let str2="muratmuratmuratmurat"
console.log(str2.indexOf('rat')) // 2   'rat' ın ilk kez geçtiği yerin ilk indexi
console.log(str2.lastIndexOf('rat')) // 17   'rat' nın son kez geçtiği yerin ilk indexi

console.log(str2.startsWith('mu')) // neyle başladığını kontrol ediyrouz
console.log(str2.startsWith('Mu'))
console.log(str2.endsWith('mu'))

let str3 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(str3.search('Love'))  // -1 sonucunu verir. bu da bunun metin içerisinde olmadığı anlamına gelir
console.log(str3.search(/Love/gi))  // 2 sonucunu verir(ilk kez geçtiği yerin ilk indexi). g tüm metin içerisinde ara der. i case insensitive yapar. yani büyük-küçük harfe duyarsız yapar
// burda 'Love' ile değil de /Love/ ile yapmamızın nedeni regex yapmamız. regex: regular expression(düzenli ifade)



console.log(str3.match('love'))  // 1 kere bulur
console.log(str3.match(/love/)) // 1 kere bulur
console.log(str3.match(/love/g)) // 3 kere bulur. çünkü g(global) ile tüm metin içerisinde aramasını sağladık
// ['love', 'love', 'love'] çıktısını verir



// regex ile metin içerisindeki sayıları bulalım
let str4 = 'In 2019 I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
let regExGlobal = /\d+/g

// \d : sayıları ifade eder  \w : kelimeleri ifade eder
// + bir veya daha fazla sayı olabilir

console.log(str4.match(regEx)) // g kullanmadığımızdan tüm metni aramadı. bulduğunda arama işlemini bitirdi
console.log(str4.match(regExGlobal)) // tüm sayıları buldu

let number =58.9
console.log(number)
console.log(parseInt(number))

let str5 ="lalala"
console.log(str5)
console.log(Number(str)) // NaN : not a number
console.log(parseFloat(str)) // NaN


// stringdeki istediğimiz kelimeyi kaldırma
let str6 = "Weekly Agenda"
console.log(str6)
let str7=str6.replace('Weekly ','')
console.log(str7)



let str8="Days Of JavaScript from 30 Days Of JavaScript"
console.log(str8.includes('Script')) // true  Script in metin içerisinde olup olmadığına bakar
console.log(str8.split('')) // tüm metni parçalar


// metin içerisinde istemediğimiz karakterleri kaldırma
const str9='%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let regEx2= /[%|&|$|@|#|;|!]/gi
console.log(str9.replace(regEx2,''))


//metin içerisinden adamın ne kadar kazandığını bulacaz
let str10='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
//annual bonus : yıllık bonus
let regEx3=/\d+/g
let [perMounth1,annualBonus,perMounth3]=str10.match(regEx3) // sayıları bize string olarak verdi
let perMounth2=Number(annualBonus)/12  // işlem yapabilmek için number a çeviriyoruz. int ya da float da olabilirdi
console.log(perMounth1,perMounth2,perMounth3)
let totalMounthlyEarnings=Number(perMounth1)+perMounth2+Number(perMounth3) 
console.log(`Total monthly earnings ${totalMounthlyEarnings.toFixed(2)}€`) // virgülden sonra 2 basamak alabilmek için toFixed() kullandık





