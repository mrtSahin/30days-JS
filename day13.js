// console metodları
// browserın konsoluna basılan lar üzerinde oynamamızı sağlayan metodlar

// console.log()
console.log("Hello World")

// css kullanarak çıktının görüntüsü ile oynayabiliriz
console.log('%cJava Script i öğreneceğim', 'color:green') // log output is green
console.log('%cJava Script%c %ci%c %cöğreneceğim',
    'color:green', '', 'color:red', '', 'color:blue')



// console.warn()
// warning : uyarı .  uyarı mesajlarını bu metod ile konsola basarız
console.warn("Bu bir uyarı mesajıdır") // uyarının gönderildiği hangi js dosyasının ve kaçıncı satırdan gönderildiğini veirir


// console.error()
// hata mesajları için kullanırız
console.error("Bu bir hata mesajıdır") // uyaru mesajında olduğu gibi bu da hangi js dosyasının ve kaçıncı satırdan gönderildiğini veirir


// console.table()
// verileri konsolda tablo olarak göstermemize yarar. bir dizi veya obje alabilir.
let array = ["Sivas", "Ankara", "İstanbul", "Adana"]
console.table(array)

let array2 = { plaka: 58, sehir: "Sivas", nufus: 600000 }
console.table(array2) // // brave tarayıcıda tabloyu eksik gösteryor o yüzden chrome kullanmanızı öneririm


let array3 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(array3)



let array4 = [
    {
        isim: "Murat",
        meslek: "Web Geliştirme",
        şehir: "Sivas",
        yaş: 20
    },
    {
        isim: "Kadir",
        meslek: "Pilot",
        şehir: "Sivas",
        yaş: 19
    },
    {
        isim: "Eren",
        meslek: "Yazılım",
        şehir: "Sivas",
        yaş: 22
    }
]

console.table(array4)

// console.time()
// bir işlemin ne kadar süre aldığını kontrol etmek için kullanılır
// console.time("süre tut")  ile süre başlatılır. console.timeEnd("süre tut") ile sğre durdurulur
// metod içerisine yazılan string aynı olmalıdır


console.time("normal döngünün süresi")
for (let i = 0; i < array4.length; i++) {
    console.log(array4[i].meslek)
}
console.timeEnd("normal döngünün süresi") // normal döngünün süresi: 0.044189453125 ms

console.time("forof döngünün süresi")
for (kişi of array4) {
    console.log(kişi.meslek)
}
console.timeEnd("forof döngünün süresi") // forof döngünün süresi: 0.048828125 ms

console.time("foreach döngünün süresi")
array4.forEach(kişi => console.log(kişi.meslek))
console.timeEnd("foreach döngünün süresi") // foreach döngünün süresi: 0.072021484375 ms


// console.info()
// konsola bilgilendirici mesaj basar
console.info('24.06.2022 tarihinde Sivas için hava durumu çok bulutlu')


// console.assert()
// içerisine yazılan koşul false ise ekrana hata mesajı basar
// koşul true ise hiç bir şey olmaz
console.assert(4>3,'4 3 ten büyük değil') // koşul true. o yüzden hiçbir şey yapmıyor
console.assert(3>4,'3 4 ten büyük değil') // Assertion failed: 3 4 ten büyük değil



// console.group()
// farklı log grupları oluşturmamıza yarar
console.group('Persons')
console.log(array4)  
console.groupEnd()

console.group('Countries')
console.log(array3)
console.groupEnd()


// console.count()
// aynı string in kaç kere ekrana basıldığını sayar
// bir fonksiyonu keç kere çağırdığımızı saymak için çok kullanışlıdır.
const func = () => {
    console.count('Fonksiyon kaç kere çağrıldı')
}
func()
func()
func()



//console.clear() // konsolu tamamen temizler
