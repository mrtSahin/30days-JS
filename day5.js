// arrays - diziler

// şimdiye kadar bir değişkene bir adet değer atayabildik.
// arrayler ile bir değişkenin içerisine birden fazla değer atayabiliriz.

//arraylar aşağıdakiler gibi tanımlanabilir.
let dizi1=Array()
let dizi2=[] // bu dizilerin içeriği şu an boş

const dizi3=[5,6,98,"string",5.79] // array içeriğindki tüm değerlerin türünün aynı olması gibi bir zorunluluk yok

console.log(dizi3.length) // 5  diznin uzunluğunu .lenght ile alabiliriz

let str='JavaScript'
let dizi4= str.split('')  // string metodlarından split()  dizi sonucunu döndürür
console.log(dizi4)

//dizi index leri 0 dan başlar
console.log(dizi4[0])  // J

dizi4[3]=58 // dizi içeriğini bu şekilde değiştirebiliriz
console.log(dizi4)


// bir diziyi içeriğini belirtmeden boyutunu belirterek de tanımlayabiliriz
let dizi5= Array(8) 
console.log(dizi5) // [empty x 8]   8 uzunluğunda içi boş array
//dizi5.fill(78) // içinini 78 ile doldurur
console.log(dizi5)  // [0, 0, 0, 0, 0, 0, 0, 0]
// let dizi5= Array(8).fill(0)  // bu şekilde de tanımlayabliriz

//.indexf() ile gönderdğimizin değerin dizi içerisindeki index ini alabiliriz.
let dizi6=[1,1,4,6,7,9]
console.log(dizi6.indexOf(6)) // 3
console.log(dizi6.indexOf(15)) // -1  eğer içinde yoksa -1 değerini döner. yani false ın karşığını döner
console.log(dizi6.indexOf(1)) // 0  eğer eğişken birden fazla varsa en ilk karşılaştığının indexini veirir
// .includes(6) ile de değerin varlığını kontrol edebiliriz. ama busefer indexinin alamayız. true ya da false döner


console.log(Array.isArray(dizi6)) // Array.isArray() ile gönderdiğimiz değişkenin dizi olup olmadıpını öğrenebiliriz

let dizi7=["Murat",'Sahin',58,636]
let str2= dizi7.toString() // toString() ile diziyi stringe çevirebiliriz
console.log(str2)
console.log(str2.split(',')) // split() ile de geri diziye çevirebiliriz

let dizi8=["Murat",'Sahin',58,636,"Sivas",454,`₺`]
let str3=dizi8.join('/')  // join() ile de stringe çevirebiliriz. ayrıca birleştiriken araya ne koyacağını belirtebiliriz. default olarak , koyar
console.log(str3)

console.log(dizi8.slice(2,5))//  [58, 636, 'Sivas']  diziyinin belirttiğimiz aralığını alabiliriz

let dizi9=["Murat",'Sahin',58,636,"Sivas",454,`₺`]
let cikarilanlar =dizi9.splice(0,3,'aa','bb',"785",9467) // diziden istediklerimizi çıkarıpı onların yerine başka değerler koyabiliriz
// .splice(başlangıç indexi, kaç tane ilerleyeceği, bunların yeine kyacakları)
console.log(cikarilanlar)
console.log(dizi9)

dizi9.push("ADANA",'kırıkkale') // push() ile de diziye eleman ekleyebiliriz
console.log(dizi9)
let sonELeman = dizi9.pop() // son lemeanı bu şekilde kaldırabiliriz. ayrıca burda son elemanı da bize döndüryor
console.log(sonELeman)
console.log(dizi9)
// shift() ile de ilk elemanı kaldırabiliriyoruz

dizi9.unshift("başa ekledim") // bu şekilde dizinin başına ekleme yapabiliriz
console.log(dizi9)

dizi9.reverse() // diziyi ters çevirir
console.log(dizi9)

dizi9.sort() // diziyi sıralar
console.log(dizi9)

let dizi10=[['a','b','c'],[12,2,3,4]]  // iç içe diziler. dizi içerisinde idzi olabliir
console.log(dizi10)
console.log([dizi10[0][2]]) // iç içe dizilerin elemanlarına erişim
console.log([dizi10[1][3]])




// dizinin tüm elemanlarının harfleirni büyük olarka ekrana yazdırma
let itCompanies =["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// for(let i =0 ;i<itCompanies.length;i++){
//     console.log(itCompanies[i].toUpperCase())
// }

// //Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// // cümlesini oluşturma
// let sonEleman=itCompanies.pop()
// let str4=itCompanies.slice()
// let sentence=`${str4} and ${sonEleman} are big IT companies.`
// console.log(sentence)

// // girilen şirket varsa ismini yoksa "YOK" çıktını gönder
// let com="Facebook"
// if(itCompanies.includes(com)){
//     console.log(com+" var")
// }else{
//     console.log(com+" YOK")
// }


//filter() metodunu kullanmadan içerisinde o harfi geçen şirketleri döndür
console.log(itCompanies)
 for(let i=0;i<itCompanies.length;i++){
     let comp=itCompanies[i].toString().split('')
     //console.log(comp)
     for(let j=0;j<comp.length;j++){
         //console.log(comp[j])
         if(comp[j]=='o' || comp[j]=='O'){
            console.log(itCompanies[i])
            break
         }
     }
} 




// stringdeki noktalam işaretlerini kaldır. sonra diziye çevir. ardından kelime sayısını bukl
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let regEx=/[','|'.'|'?'|';'|':'|]/g
let newText= text.replace(regEx,'')
let dizi11=newText.split(' ')
console.log("cümledeki kelime sayısı "+dizi11.length)


// iki diziyi bilreştir
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB'] 
let fullStack=frontEnd.concat(backEnd)
console.log(fullStack)





const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// diziyi sırala ardınan max ve min değerleri bul
console.log(ages.sort()) // [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
console.log("min:"+ages[0]+"  max: "+ages[ages.length-1])


// dizinin medianının(ortanca değer) bul. eğer tek sayıda eleman varsa tam ortadaki mediandır
// eğer çift sayıda eleman varsa ortadaki iki elemanın ortalaması median olur
let orta=Math.round(ages.length/2)-1
let median
if(0==ages.length%2){
    median=(ages[orta]+ages[orta])/2
}else{
    median=ages[orta]
}
console.log(median)
console.log(orta)









