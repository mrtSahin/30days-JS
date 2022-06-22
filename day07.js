// fonksiyonlar
// temiz ve okunabilir bir kod için fonksiyonlar kullanılırlar. ayrıca bir işlemi
// farklı yerlerde çalıştıracaksak fonksiyonları kullanabilir. bu sayede aynı 
// kod bloğunu çok kere yazmaktansa bir kere yazıyoruz ve fonksiyon ile onu
// çalıştırabiliyoruz
 
//her fonksiyon sadece bir işlem yapmalıdır.

// fonksiyon tanımlama
function functionName() {
    // çok kere çalışacak olan kod bloğu
  }


functionName() // fonksiyonu çağırma 


//parametreli ve parametresiz fonksşyonlar olabilir
function parametreli(gelenParametre){ 
    console.log(gelenParametre)
}
parametreli("Parametreli fonksiyon")

function parametresiz(){
    console.log("Parametresiz fonksiyon")
}
parametresiz()

function defaultP(parametre = 58){ // parametreler default değerler verebiliriz
    console.log(parametre)
}
defaultP()

//fonksiyonlar parametre aldığı gibi döndürebilir de
// yani işlem sonucu bize bir değer yollayabilir

function topla(sayi1,sayi2){
    let toplam=sayi1+sayi2 // fonksiyon içerisinde ytanımlanan bir değişken sadece fonksiyon içerisinde geçerlidir(kapsam alanı). fonksiyon dışında bu değişkene ulaşamayız
    return toplam // aynı şekilde fonksiyon dışarısında tanımlanan bir değişken fonksiyon parametreleri ile alınmazsa ona da erişilemez
} // fonsiyonlar ile her türlü veri türü alınabilir ve döndürülebilir

let fonkSonucu=topla(4,6)
console.log(fonkSonucu)


// eğer gönderilecek parametre sayısını bilmiyorsak gönderilenlere arguments ile erişebiliriz. ama kullanımı az çünkü rest operatörü var.
function sumAllNums() {
    console.log(arguments)
   }
   
sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]



//foksiyonları değişkenlere tanımlayabiliriz
const myFunction = function(param){ // kullanımı normal fonksiyon ile aynıdır
    console.log(param)
}
myFunction("parametre")


//kendi kendini çağıran fonksiyonlar
;(function(n) { // hata vermemsi için başına ; koyuyoruz
    console.log(n * n)
})(2)




// arrow fonksiyonlar
// arrow fonksiyonlar çağırabilmek için bir değişkene atanmalılar
const arrowF = () =>{
    console.log("arrow fonksionlar")
}

arrowF()

const arrowF2 = (name) =>{
    console.log("arrow fonksionlar"+name)
}
arrowF2("Murat")

const arrowF3 = name =>{ // tek bir parametre alacaksak paranteze gerek yok
    console.log("arrow fonksionlar"+name)
}
arrowF3("Yasin")


// arrow fonksiyonlarda sayısını bilmediğimiz değişkenleri alabilmek için rest 
//operatörğnü kullanıyoruz. bunu normal fonksiynlar için de kullanabilirz. 
//arguments yerine kullanılması tavsiye edilir

const arrowF4=(...restOperatoruIleGelenler) =>{
    console.log(restOperatoruIleGelenler)
}
arrowF4("Sivas","Murat",558,964,'a')

function func(...rest){
    console.log(rest)
}
func("Murat","Kael","Evo","Lfa")



