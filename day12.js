// regex  : regular expressions - düzenli ifadeler
// metinlerde aranan bir kalıbı kolayca bulmamızı sağlayan bir çeşit algoritmadır.
// genellikle posta adresi, tarih, telefon numarası gibi kullanıcı girdilerinin doğru kalıpta girildiğini kontrol etmek için kullanılır
// JavaScript'te RegExp'i kullanmak için ya RegExp yapıcısını kullanırız ya da iki eğik çizgi ve ardından bir bayrak kullanarak bir RegExp kalıbı oluşturabiliriz
// regex parametreleri  : aranacak kalıp ve bayraktan(opsiyonel) oluşur.

//bayraklar
// g      global	       Tanımlanan regex ile tüm eşleşmeleri yakala.
// i      insensitive	   Büyük/küçük harf duyarsız hale getirir.
// m      multiline        Birden fazla satırda regex taraması yapılmasını sağlar.
// u      unicode	       Unicode tanımlarının regex içinde kullanımına izin verir.


// daha fazla metakarakter için
// https://cheatography.com/tag/regex/


// regex iki farklı şekilde tanımlanabilir
//1
let pattern = 'love'
let flag = 'gi'
let regEx1 = new RegExp(pattern, flag)  // bayraksız    let regEx1 = new RegExp(pattern)
//2
let regEx2= /love/gi //  bayraksız    let regEx2= /love/

//.test() metodu
//regex in kendi metodu
let regEx3= /ipsum/
let str1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
console.log(regEx3.test(str1)) // true   // sadece true/false değer döner

//match() metodu
//string metodu
console.log(str1.match(regEx3)) //  ['ipsum', index: 6, input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', groups: undefined]
//match() daha kapsımlı bir sonuç verir
let regEx4=/ipsum/g // g bayrağı ile kullanırsak kelime cümle içerisinde kaç kere geçiyorsa o uzunlukta bir array oluşturur
let str2="Lorem ipsum dolor sit ipsum, consectetur ipsum elit." //  g bayrağını kullanmazsak ilk karşılaştığında işlemi bitirir
console.log(str2.match(regEx4)) //  ['ipsum', 'ipsum', 'ipsum']

// search() metodu
console.log(str2.search(regEx4)) // 6    sadece ilk karşılaştığının ilk indexini verir 


// .replace()  metodu
// regex ile aranan kalıbı belirtip o kalıbı başka bir kelime vs değiştirebiliriz
let str3 = "Java Script dünyanın en iyi programlama dilidir"
let regEx5=/Java Script/g
console.log(str3.replace(regEx5,'Ruby')) // Ruby dünyanın en iyi programlama dilidir

let str4 = "Python en fazla kütüphane desteğine sahip dillerden biridir. Bu yüzden python ile çok farklı şeyler yapılabilir. Bu sayede python kullanım alanı geniş dillerden biridir."
let regEx6 = /python/  // g byrağını koymadığımızdan tüm eşleşmeleri yakalamadı sadece birinci eşleşmeyi yakaldı. ayrıca i bayrağını koymadığımızdan şu an büyük küçük harf duyarlığı var
console.log(str4.replace(regEx6,'JAVA SCRIPT'))
let regEx7 = /python/i // artık büyük küçük harf duyarlılığı yok
console.log(str4.replace(regEx7,'JAVA SCRIPT'))
let regEx8 = /python/gi // artık metin içerisindeki tüm pyhon ve Python kalıplarını yakalar
console.log(str4.replace(regEx8,'JAVA SCRIPT'))


// cümledeki tüm % karakterlerini kaldırma
const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
let regEx9=/%/g
console.log(txt.replace(regEx9,''))




// köşeli parantez
const pattern2 = '[Ee]lma'
const str11= "Meyve.Elma, gülgiller familyasından kültürü yapılan bir meyve türü.Golden elmalar, sarı ya da açık kabuk yeşili renginde olanlardır"
console.log(str11.match(pattern2))  // Elma veya elma yı bulur. ilk bulduğunda işlemi bitirir

let regEx10=/[Ee]lma/g // tüm metin içerisinde araycak
console.log(str11.match(regEx10)) // ['Elma', 'elma']

let regEx11 = /[Ee]lma|[Mm]eyve/g
console.log(str11.match(regEx11)) // ['Meyve', 'Elma', 'meyve', 'elma']



//   \d  rakam ve sayıları bulur
let regEx12= /\d/g // tüm rakamları ayrı ayrı bulur
let str12= "Corona 2019 yılının sonlarında ortaya çıkarken 3 yılın sonunda 2022 yılında geöle görülür şekilde azalmıştır."
console.log(str12)
console.log(str12.match(regEx12)) // ['2', '0', '1', '9', '3', '2', '0', '2', '2']

let regEx13= /\d+/g // bir ve daha falza basamağa sahip sayıları bulur. saçma oldu ama + nın işlevini kavrayabilmek için böyle bir cümle kurdum. birazdan anlaşılır
console.log(str12.match(regEx13)) // ['2019', '3', '2022']

let regEx14= /\d{4}/g // 4 basamaklı sayuları bulur
console.log(str12.match(regEx14)) //['2019', '2022']

//  .  0
let regEx15=/a./g // a ve a dan sonraki ilk karakeri birlikte alır
console.log(str12.match(regEx15))

let regEx16=/[a].+/g// a ve a dan sonraki tüm karakerleri birlikte alır
console.log(str12.match(regEx16))

// let regEx17=/[a]{4}/g     // aaaa  alır
let regEx17=/[a].{4}/g  // a ve a dan sonra 4 karakter alır
console.log(str12.match(regEx17))


// ?
const str13 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const regEx18 = /[Ee]-?mail/g  // ? den önceki karakter opsiyoneldir. olabilir de olamaz da
console.log(str13.match(regEx18))  // ["e-mail", "email", "Email", "E-mail"]


// karakter sayısını belirtme
const regEx19 = /\b[a-zA-Z]{4}\b/g  //  4 uzunluğundaki kelimeleri alır. sayıları almaz
console.log(str13.match(regEx19))

const regEx20 = /\b[a-zA-Z]{1,4}\b/g // 1,2,3,4 uzunluğundaki kelimeleri alır
console.log(str13.match(regEx20))


// ^
let regEx21 = /^[I]/g
console.log(regEx21.test(str13)) // // I ile başlıyor mu  ['I']


let regEx22 = /[^A-Za-z,. ]+/g  // harfler ve nokta hariç al
console.log(str13.match(regEx22))  // ['-', '-']

// $
const regEx23 = /^[A-Z][a-z]{2,6}$/g
const str14 = "Murat"
console.log(regEx23.test(str14))

