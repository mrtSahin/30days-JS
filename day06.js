
// döngüler
// bir işlemi çok kez yapacağımız zamanlarda kullanırız.
// ör ekrana 100 kere ismini yazdırma


//  FOR döngüsü
// for(başlangıç değeri; durma değeri; artırma-azalma){
//     // code goes here
// }
 

for(let i = 0; i <= 5; i++){
    console.log(i)
}

for (let i=5;i>0;i--){
    console.log(`${i} * ${i} = ${i * i}`)
}


// dzi elemanlarının başka bri dize aktalıması durumunda da kullanabiliriz
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)





// WHİLE döngüsü
let i=0
let sum =0
while(i<100){
    sum=sum+i
    //sum+=i
    i++ // koşulusağlayabilmesi için i Yi her seferinde artırıyoruz
} // koşulu sağlamadaığı sürece bu döngü içerisinde bulunur. bu da sonsuz döngü olmuş olur.
console.log(sum)


// DO WHİLE döngüsü
// do while ın while döngüsünden farkı:
// do döngüsüne ilk girişinde koşul kontrolü yapmazken while da ilk seferde de kontrol yapar
// yani koşul sağlanmasa bile do while döngüsüne ilk seferde kesinlikle girer
while(false){
    console.log("while döngüsü")
}

do{
    console.log("durum false ama do while döngüsü olduğunda ilk seferde girer")
}while(false)



// FOR OF döngüsü
let names=["Murat","Kadir","Yiğit","Eren"]
for(const item of names){  //diznin içerisindeki her bir değeri sırasıyla item değişkenine atar
    console.log(item)
}



// BREAK döngüyü kırmak-kesmek için kullanırız
const numbers=[78,65,58,9,65,8]
let myNumber=58
for(let i=0;i<numbers.length;i++){
    if(myNumber==numbers[i]){   // myNumber sayısı dizi içerisinde varsa döngüyü sonlandırmasını iatiyorum
        console.log(`${myNumber} dizi içerisinde bulundu işlem bitti`)
        break
    }
    console.log(numbers[i])
}


// CONTİNUE  mevcut iterasyonda işlemi atlamak-es geçmek için kullanırız
for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue // ekrana 3 yazdırmaz. continue ile i=3 için işlemi atladık
    }
    console.log(i)
}// 0 1 2 4 5



// #
// ##
// ###
// ####
// #####
// ######
// #######
// bu deseni oluşturacağımız bir döngü

for (let i=1;i<=7;i++){
    let temp=''
    for(let j=1;j<=i;j++){
        temp+='#'
    }
    console.log(temp)
}



// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
console.log(`i    i^2    i^3`)
for(let i=0;i<=10;i++){
    console.log(`${i}    ${i**2}    ${i**3}`)
}



//0-100 arasında asal sayılar
let primeNumbers=[]  // asal sayıları ekleeceğimiz dizimiz
for (let i = 0; i < 100; i++) {
    let counter=true // kontolcümüz. eğer true ise asal, false ise asal değil olacak
    for(j=2; j<i; j++){ // j = 2 den başlatıp sayının kendisine kadar artırıyoruz
        if (i%j==0) { // eğer bir sayı kendisi ve 1 dan başka bir sayıya bölünüyorsa asal değildir.
            counter=false
            break
        }
    }
    if(counter && i>1){  // 1 asal sayı olmadığında bunun haricindeki sayıları almayız
        primeNumbers.push(i)
    }
}
console.log(primeNumbers)




// birbirinden farklı 5 tane random sayı
let rand=[]
rand.fill(0)
for(let i=0;i<5;i++){
    let temp=parseInt((Math.random()*11))
    let control=0
    for(let j=0;j<=i;j++){
        if(rand[j]==temp){
            console.log("aynı")
            i--  // aynı değer çıktığında o i indexini atlayıp boş bırakmamk için i yi 1 eksiltiyoruz
            control++
        }
    }
    if(control==0){
        rand[i]=temp
    }
}
console.log(rand)




// sonu 'ia' ile biten ülkeleri bulma
const countrieS=['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland', 'Iceland','Japan','Kenya']

let iaCountries=[]
for(country of countrieS){
    if(country.endsWith('ia')){
        iaCountries.push(country)
    }
}
console.log(iaCountries)

// dizideki en uzun ülke ismi
let longestC=''
for(country of countrieS){
    if(country.length>longestC.length){
        longestC=country
    }
}
console.log(longestC)

