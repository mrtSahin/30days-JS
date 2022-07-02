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
let isMomHappy=false

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
    const message ="Hey friends this is my phone"+phone.name
    return Promise.resolve(message) // burda da biz harici olarak bir resolve yollayabiliyoruz
}

askMom()