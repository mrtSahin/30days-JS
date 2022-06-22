// set ve map

// set bir eleman koleksiyonudur. tüm elemanlar birbirinden farklıdır
//set tanımı
const setOf = new Set()
console.log(setOf) // Set(0) {size: 0}

//array üzerinden set oluşturma
const languages = [
    'Türkçe',
    'Japanese',
    'Türkçe',
    'Türkçe',
    'Spanish',
    'English',
    'French',
]
  
const setOfLanguages = new Set(languages) // dizi içerisinde aynı elemandan birden fazla varsa bile set içerisinde ondan sadece bir tane olabilir
console.log(setOfLanguages)
for(const language of setOfLanguages){
    console.log(language)
}

setOfLanguages.add('Arabic') // set e yeni elemanlar ekleme
setOfLanguages.add('Russian')
setOfLanguages.add('Türkçe') // var olduğundan dolayı eklemeyecektir

console.log(setOfLanguages)
console.log(setOfLanguages.size) // 7  uzunluğu


// for döngğsğ ile de dizi elenlarıyla set oluşturabiliriz
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
const setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
console.log(setOfCompanies) // Set(5) {'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'}

setOfCompanies.delete('Google') // bir elemanı ismiyle silme
console.log(setOfCompanies)// Set(4) {'Facebook', 'Amazon', 'Oracle', 'Microsoft'}

// bir elemanın varlığını kontrol etmek
console.log(setOfCompanies.has('Apple')) // false
console.log(setOfCompanies.has('Facebook')) // true

// set i içini tamamen silmek istersek .clear() ile yapabiliriz
// companies.clear()
// console.log(companies)

// elemanın dizide kaç kere geçtiğini bulma
for(const setLang of setOfLanguages){
    let countLang= languages.filter(arrayLang => arrayLang==setLang)
    //console.log(countLang) //['Türkçe', 'Türkçe', 'Türkçe']
    console.log(`${setLang} languages dizisinde ${countLang.length} kere vardır.`)
} // Arabic ve Russian için 0 diyecektir. çünkü biz eklemeyi sadece setOfLanbuages set ine yaptık. diziye yapmadık



// dizideki birbirinden farklı elemanlar 
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)
console.log(setOfNumbers) // Set(5) {5, 3, 2, 9, 4}



// a ve b dizilerindeki ortak elemanları bir sete atma
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C) // Set(3) {3, 4, 5}




//map 
//map bir key ve bir value dan oluşur. key ler value ları işaret eder.

const plakalar =[
    [58,'Sivas'],
    [34,'İstanbul'],
    [42,'Konya'],
    [60,'Tokat']
]
const mapOfPlakalar= new Map(plakalar)
console.log(mapOfPlakalar) // Map(4) {58 => 'Sivas', 34 => 'İstanbul', 42 => 'Konya', 60 => 'Tokat'}
console.log(mapOfPlakalar.get(58)) // Sivas
// value değerlerimi çağırmak için key leri kullanıyoruz. ama tam tersi olmaz. .ünkü anahtarla kilidi açabilirisiniz. ama kilitle anahtarı açamazsınız

// map e yeni key,value eklemeyi .set() fonksiyonu ile yapıyoruz ***DİKKAT
mapOfPlakalar.set(61,'Trabzon') //Map(5) {58 => 'Sivas', 34 => 'İstanbul', 42 => 'Konya', 60 => 'Tokat', 61 => 'Trabzon'}
console.log(mapOfPlakalar)

console.log(mapOfPlakalar.has('Sivas')) // false
console.log(mapOfPlakalar.has(58)) // true
// map te value ların varlığını kontrol edemezken key lerin varlığını kontrol edebiliriz


// destructur 
// destruct işlemi ile bir dizi,liste,map vs içerisindeki değerleri farklı değişkenlere atayabiliriz
for (const [plaka, sehir] of mapOfPlakalar){ 
    console.log(plaka, sehir)
}



