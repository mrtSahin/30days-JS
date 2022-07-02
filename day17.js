// local storage - session storage
// https://engineering.teknasyon.com/local-storage-ve-session-storage-nedir-7d913a6b5651#:~:text=Aralar%C4%B1ndaki%20en%20b%C3%BCy%C3%BCk%20fark%20ise,da%20verileri%20depolamaya%20devam%20eder.

// kullanıcı bilgilerini depolamak için çerezler vardır. çerezler sayesinde siteler oturumunuzu açık tutabilir, 
// site tercihlerinizi hatırlayabilir ve size yerel olarak alakalı içerik sunabilir. ama çerezler her HTTP isteğinde 
// sunucudan çağırılır. bu da internet sitesini daha yavaş hale getirir ve çerez bilgileri şifrelenmediğinden
// güvenlik anlamında açık oluşturur. ayrıca çerezler en fazla 4kb veri tutabilir.

// işte bu yüzden HTML5 web depolama vardır. bu yöntemle 5mb a varan veriyi yerel olarak depoayabiliriz. hem de 
// her seferinde sunucuya istek atmadığından siteyi yavaşlatmaz ve çerezlerde var olan güvenlik açığını ortadan kaldırır.
// bu yerel depolamada veriler key/value şeklinde depolanır.

// session storage
// veriyi bir oturum sürecince tutar. sayfa kapatıldığında veriler kaybolur

// local storage 
// veriyi süresiz depolar.(manuel bir müdahale olmadan)

// 5 tane metodları vardır
// setItem() - veriyi eklemek. key,value değerlerini alır
// getItem() - veriye erişmek. key değerini alır value değerine ulaşır
// removeItem() - veriyi silmek. key değerini alır
// key() - veriye indexi ile erişmek. indez değerini alır
// clear() - her şeyi silmek

// local ve session storage ı tarayıcı üzerinden izleyebilmek için f12 ile geliştirici ekranını 
// açtıktan sonra uygulama bölümü içerisinde yerel depolama(local storage) ve oturum depolama(session storage) var.

localStorage.setItem('firstName','Murat')
console.log(localStorage)
console.log(localStorage.getItem('firstName')) 

// bir dizi veya objeyi depolamak istiyorsak onu ilk önce JSON formatına çevirmemiz gerekli
let yetenekler=['JavaScript', 'Java', 'Python']
let yeteneklerJSON=JSON.stringify(yetenekler,undefined)
sessionStorage.setItem("yetenekler",yeteneklerJSON)
console.log(sessionStorage)

// bir dizi depolamak istiyorsak obje dizisi olmalıdır.
let yetenekler2=[
    {yetenek:'JavaSript'},
    {yetenek:'Java'},
    {yetenek:'Python'},
    {yetenek:'C++'},
    {yetenek:'Kotlin'}   
]
let yetenekler2JSON=JSON.stringify(yetenekler2,undefined)
sessionStorage.setItem('yetenekler2',yetenekler2JSON)
console.log(sessionStorage)

let object = {
    firstName:"Murat",
    lastName:"Şahin",
    city:"Sivas",
    skills:["C++","JavaSript","Java"]
}

let objectJSON=JSON.stringify(object)
localStorage.setItem("object",objectJSON)
console.log(localStorage)

localStorage.removeItem("object") // key değeri object olan veriyi silme
console.log(localStorage)

console.log(sessionStorage.getItem('yetenekler')) // ["JavaScript","Java","Python"]     key e göre çağırma
console.log(sessionStorage.key(0)) // yetenekler     indexe göre çağırma
console.log(sessionStorage.getItem(sessionStorage.key(0))) // ["JavaScript","Java","Python"]

sessionStorage.clear()
localStorage.clear()

console.log(localStorage)
console.log(sessionStorage)