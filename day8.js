// kapsam , objeler


//değişken kapsamları global ve local olarak ikiye ayrlır. global değişkenlere her yerde 
//erişilirken local değişkenlere sadece tanımlandıkları kod bloğu içerisinde erişilirler
// kapsam alanları {} parantezi içerisidir
// var anahtar kelimesi ile tanımlanan değişkenlerin kapsam alanları yoktur her yerde değiştilebilir ve kullanılabilirler.
// hataların önüne geçmek için var yerine let anahtar kelimesi kullanılmalıdır.
// var eskide kaldı


let a = 'JavaScript'  // blobal değişkenler
let b = 10 
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b)


console.log("----------------------------------")
// değişkenler global olsa da değerleri değiştirildikleri kod bloğu 
//içerisinde geçerlidir. o kod bloğunun dışında eski değerlerini korurlar
let aa = 'JavaScript' 
let bb = 10 
function letsLearnScope() {
  console.log(aa, bb) // JavaScript 10
  if (true) {
    let aa = 'Python' // bu değerleri sadece if bloğu içerisinde geçerlidir.
    let bb= 100
    console.log(aa, bb) // Python 100
  }
  console.log(aa, bb)// JavaScript 10
}
letsLearnScope()
console.log(aa, bb) // JavaScript 10, accessible




//local değişkenler 
let q="Sivas" // global
let w=58 // global


function yadır(q,w){
    let localDeğişken="Alibaba" // bu değişken sadece bu fonksiyon içerisinden çağırılabilir. bunun dışında hiç bir yerden çağırılamaz
    console.log(q,w,localDeğişken)
}



// objeler
// etrafımızdaki her şey objedir. objelerin özllikleri vardır ve bu özelliklerinde değerleri vardır


const person1 = {} // obje tanımı

const rectangle = {
    length: 20, // objenin özellikleri ve değerleri
    width: 20
}
console.log(rectangle) // {length: 20, width: 20}


// obje içerisine her türlü değişken tanımlayabiliriz
// fonksiyonlar dahil
// day7.js den hatırlayın değişkenlere fonksiyon tanımlayabiliyorduk
const person2 = {
    firstName: 'Murat',
    lastName: 'Şahin',
    age: 250,
    country: 'Türkiye',
    city: 'Sivas',
    skills: [
      'Java',
      'Python',
      'JavaScript',
      'Kotlin',
      'C++',
      'PostgreSQL',
    ],
    isMarried: false,
    getFullName: function() {
        return `${this.firstName}${this.lastName}` // burdaki this anahtar kelimesi objenin kendisini belirtiyor
    },
    'phone number': '+901111111111'

}
console.log(person2)
// obje özelliklerine erişim
console.log(person2.firstName) 
console.log(person2['lastName']) 
console.log(person2['phone number']) 


// objeye daha sonradan özellik ekleyebiliriz veya mevcut özelliğinin değerini değiştirebiliriz
person2.nationality = 'Türk'
person2.country = 'Japonya'
person2.title = 'engineer'
person2.skills.push('Meteor')
person2.skills.push('SasS')
person2.isMarried = true

console.log(person2)
// fonksiyon da eklenebilir
console.log("fonksiyon eklenmiş obje")
person2.getPersonInfo = function() {
    //let tempSkills =this.skills  // arraylar referans değişkenler olduğundan bu şekilde yaparsak 
    //tempSkills üzerinde yaptığımız değişiklikler thisçskills içinde geçerli olacaktı ama biz this.skills i 
    //korumak istiyoruz
    let tempSkills=[]
    for(let i =0;i<this.skills.length;i++){
        tempSkills[i]=this.skills[i]
    }
    console.log(tempSkills)
    console.log(this.skills)
    let skillsWithoutLastSkill =  tempSkills// en son yetenek hariç alıyor
      .splice(0, tempSkills.length - 1)
      .join(', ')
    let lastSkill = tempSkills.splice(tempSkills.length - 1)[0] // son yetenek ayrı alıyor
    

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}` // son yetenek önce and ekliyor
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
console.log(person2)
console.log(person2.getPersonInfo())


// orjinal objeye dokunmadan kopyalama işlemi
console.log("orjinal objeye dokunmadan kopyalama işlemi")
const copyPerson = Object.assign({}, person2)
console.log(copyPerson)

// objenin sadece özellik isimleirini alma. 
console.log("objenin sadece özellik isimleirini alma. ")
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.skills)
console.log(address) //

// objenin sadece özelliklerinin değerlerini alma
console.log("objenin sadece özelliklerinin değerlerini alma")
const values = Object.values(copyPerson)
console.log(values)

// bir özelliğin objede olup olmadığını kontrol etme
console.log("bir özelliğin objede olup olmadığını kontrol etme")
console.log(copyPerson.hasOwnProperty('name'))