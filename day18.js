// promise - fetch api
// https://medium.com/codefiction/javascriptte-promise-kullan%C4%B1m%C4%B1-ccca1123989a
// https://www.yusufsezer.com.tr/javascript-es6-promise/
// https://www.youtube.com/watch?v=MBexO0Cfh3c

// Promise, bir işlemin başarılı veya başarısız olarak biteceğini garanti eden bir yapıdır.
// promise tanımlanırken iki parametre alır.
// resolve : başarılı olunca çağırılacak fonksiyon
// reject : başarısız olunca çağırılacak fonksiyon
// İşlem başarılıysa yani resolve çağrılmışsa then metodu,
// işlem başarısızsa yani reject çağrılmışsa catch metodu çalıştırılır.
// promise nesnesi tanımlanırken new anahtar kelimesi kullanılır

const promise=new Promise(function(resolve,reject){
    if(false){
        return resolve("Başarılı")
    }else{
        return reject("Hata")
    }
});

promise.then(function(data){
    console.log(data)
}).catch(function(data){
    console.log(data)
});

// servera istek atmayı simüle etmek için gecikmeli bir işlem örneği
const promise2=new Promise((resolve,reject)=>{
    setTimeout(function(){
        const number = Math.floor(Math.random()*500)
        number>250
        ? resolve(number) 
        : reject(number)
    },2000)
}).then((data)=>{
    console.log("koşul sağlandı sayı 250 den BÜYÜK: "+data)
    return data*data
}).then((data)=>{ // promise chain(zincir) yapabiliriz. böylece işleri sırayla peşpeşe yaptırabiliriz
    console.log("Sayının karesi: "+data)
}).catch((data)=>{
    console.log("koşul sağlanmadı sayı 250 den KÜÇÜK: "+data)
});


// anne mutluysa çocuğuna telefon alacak
let isMomHappy=true

let willGetNewPhone = new Promise(function(resolve,reject){
    if(isMomHappy){ // eğer anne mutluysa telefonu alıyor
        const phone={
            name : 'Iphone 13',
            color : 'green',
            display : 'oled'
        }
        resolve(phone) // true ise resolve ile telefonu yolluyoruz
    }else{ // mutlu değilse hata mesajı yolluyoruz
        const error= new Error('Mom is not happy')
        reject(error)
    }
});

// sonra anneye soruyoruz
const askMom =function(){
    willGetNewPhone
        // .then((data)=>{
        //     console.log(data) // {name: 'Iphone 13', color: 'green', display: 'oled'}
        //     //  resolve metodu ile gönderilen değer ekrana basılacak
        // }) // telefonu direkt ekrana basmak yerine veriyi başka bir metodda kullanalım
        .then(showToFriends) // showToFriends metodu bize bir promise yolluyor onu da alttaki metodda yakalıyoruz
        
        .then(promise=> console.log(promise)) // bu şekilde de promise chain kullanmış oluyorz
            
        .catch(error=> {
            console.log(`%c${error}`,'color:red')
           // console.log(data) //Error: Mom is not happy
                                //at day18.js:58:22
                                //at new Promise (<anonymous>)
                                //at day18.js:49:23
        });
}

// çocuk telefonunu arkadaşlarına göstericek
const showToFriends=function(phone){
    const message ="Hey friends this is my phone "+phone.name
    return Promise.resolve(message) // burda da biz harici olarak bir resolve yollayabiliyoruz
}

askMom()



// https://www.muratoner.net/javascript/javascript-fetch-api-nedir-http-nasil

const url = 'https://restcountries.com/v2/all' // ülkeler apisi
fetch(url) // asenkron veri alıp ve veri göndermemizi sağlar. Promise tabanlıdır
    .then(function(response){
        //console.log(response) // response nesnesinin özellikleri ve metodları
        return response.json()
    }) // veri json ise .json() text ise .text() metodunu kullanıyoruz
    .then(data => { 
        console.log(data)
    })
    .catch(error => console.error(error)) // handling error if something wrong happens

// üstteki işlem GET isteğiydi 
// POST isteği

// fetch('https://jsonplaceholder.typicode.com/posts', {  
//     method: 'post',  
//     headers: {  
//       "Content-type": "application/json; charset=UTF-8"  
//     },  
//     body: {
//       "userId": 1,
     
//       "title": "title test",
//       "body": "body test"
//     }
//   }).then(response => response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(new Error("Hata")))


// async and await
// bir fonksiyonun önündeki async bu metodun bir söz verdiğini söyler.
// sözden gelen değere erişmek içinse await i kullanırız
// https://webolog.net/javascript-fetch-api-nedir-ve-nasil-kullanilir/#close
async function fetchText() {
    let response = await fetch('/readme.txt'); // readme.txt isminde bir dosya olmadığından hata verecek 
    if(response.status===200){ // İstenen kaynak mevcut değilse, yanıt kodu 404‘tür:
        let data = await response.text();
        console.log(data);
    }if(response.status===404){
        console.log(new Error("Text bulunamadı")) // Error: Text bulunamadı  at fetchText (day18.js:135:21)
        console.log(response.status); // 404
        console.log(response.statusText); // Not Found
    }

}
fetchText()
// Response nesnesi, status ve statusText özellikleri aracılığıyla durum kodunu ve durum metnini 
// sağlar. Bir istek başarılı olduğunda durum kodu 200‘dür ve durum metni OK‘dur:

async function fetchText2(){
    let response = await fetch(url);
    console.log(response.status); // 200
    console.log(response.statusText); // 
    if(response.status===200){
        let data  = await response.json();
        console.log(data);
        console.log("Bağlantı başarılı") // Bağlantı başarılı
    }
}
fetchText2()


// ülkeler API sini fetch kullanarak içeriğini alın ve consola country, capital, languages, population ve area
// değerlerini basın  
const countriesAPI = 'https://restcountries.com/v2/all'
async function fetchCountires(API){
    let response = await fetch(API);
    if(response.status===200){
        let data = await response.json()
        data.forEach(country => {
            let languagesStr=""
            for(lang of country.languages){
                languagesStr+=lang.name+" "
            }
            console.log(`Country: ${country.name} Capital: ${country.capital} Languages: ${languagesStr} Population: ${country.population} Area: ${country.area}`)
        });
        
        // en kalabalık 10 ülke
        data.sort((a,b)=>b.population-a.population)
        console.log("%cen kalabalık 10 ülke","color:cyan")
        for(let i=0;i<10;i++){
            console.log(data[i])
        }

        // dünyada resmi olarak kullanılan toplam dil sayısı
        let languages=[]
        data.forEach(country => {   
            for(lang of country.languages){
                languages.push(lang.name)
            }
        });
        //console.log(languages)
        const languagesSet=new Set(languages)
        console.log(`Dünyada konuşulan dil sayısı ${languagesSet.size}`)
        
    }
}
fetchCountires(countriesAPI)



// Tüm kedi adlarını catNames değişkenine yazdırın.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

function fetchCats(API){
    fetch(catsAPI)
    .then(response => {
       return response.json()
    })
    .then(data =>{
        console.log(data)
        data.forEach(cat => {
            console.log(cat.name+"    weight(metric) :"+cat.weight.metric)
        });
    })
}

fetchCats(catsAPI)






