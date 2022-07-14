// DOM : Document Object Model
// HTML dosyalarının işlemek için farklı öğelerini vardır.
// HTML öğelerini JavaScript kullanarak alabilir, oluşturabilir, ekleyebilir ve silebiliriz.
// HTML öğelerini almak için tag name, id, class name ya da diğer özelliklerini kullanabiliriz.





// day21-01 html dosyasından öğelere erişim

// document.getElementsByTagName() metodunu kullanarak 
// içerisine dizi parametresi olarak bir tagname alır ve HTMLCollection objesi döndürür
// HTMLCollection, HTML öğelerinin dizi benzeri bir nesnesidir.
// foreach() desteklemez bu yüzden elemanlara erişmek için normal for döngüsü kullanırız


const allTitles = document.getElementsByTagName('h1') // html dosyasındaki h1 etiketine sahip öğeleri alır.
console.log(allTitles) // HTMLCollection(4)
console.log(allTitles.length) // 4

// foreach() desteklemez bu yüzden elemanlara erişmek için normal for döngüsü kullanırız
for(let i=0;i<allTitles.length;i++){
    console.log(allTitles[i]) // HTMLCollection içerisindeki tüm öğeleri basar
}




// document.getElementsByClassName() metodunu kullanarak
// HTMLCollection nesnesi döndürür
const allTitles2=document.getElementsByClassName('title') // title classname ine sahip tüm öğeleri döner
console.log(allTitles2) // HTMLCollection(3)
console.log(allTitles2.length) // 3
// uzunluğunun farklı olmasının nedeni h1 etiketine sahip öğelerden birinin içerisi boş
// bu yüzden bir class i yok.




// document.getElementsById() metodunu kullanarak
// tek bir öğe döndürür
const firstTitle=document.getElementById('first-title')
console.log(firstTitle) // <h1 class='title' id='first-title'>First Title</h1>




// document.querySelector() metodu kullanarak
// öğeleri tag name, id ya da class name ile çağırmamıza yarar
// tag name kullanıyorsak sadece ilk öğeyi seçer

let firstName2=document.querySelector('h1') // sadece ilk öğeyi alır
let firstName3=document.querySelector('#first-title') // id si first-title olan öğeyi alır
let firstName4=document.querySelector('.title')

console.log(firstName2) // <h1 class='title' id='first-title'>First Title</h1>
console.log(firstName3) // <h1 class='title' id='first-title'>First Title</h1>
console.log(firstName4) // <h1 class='title' id='first-title'>First Title</h1>




// document.querySelectorAll() metodunu kullanarak
// tag name ya da class a göre öğeleri almak için kullanılır.
// array metodlarını destekleyen dizi benzeri nesne olan bir nodeList döndürür
// içeriğine erişmek için for döngüsü ya da foreach kullanılır

const allTitles3=document.querySelectorAll('h1')
const allTitles4=document.querySelectorAll('.title')

console.log(allTitles3.length) // 4
console.log(allTitles4.length) // 3





// JS üzerinden HTML öğesi oluşturma
let title
title = document.createElement('h1')
title.className='title'
title.style.fontSize='24px'
title.textContent='HTML öğesi oluşturma'

console.log(title)


// birden fazla HTML öğesi oluşuturmak için döngü kullanırız

// oluşturulan bir öğeyi HTML belgesinde görmek için onu alt öğe olarak 
// üst öğeye eklemeliyiz. document.body kullanarak HTML belge gövdesine erişebiliriz. 
// document.body, appendChild() yöntemini destekler

for(let i=0;i<3;i++){
    title = document.createElement('h1')
    title.className='title'
    title.style.font='24'
    title.textContent=i
    document.body.appendChild(title) // bununb sayesinde ekranda görsel olarak görebiliriz
    console.log(title)
}



// Child Node u Silme

// const ul = document.querySelector('ul')
// const lists =document.querySelectorAll('li') 
// for(const list of lists){
//     ul.removeChild(list) // normalde li html dosyasındaki li etiketine sahip öğeleri ekrana basması gerekli
// }// ama biz burada o öğeleri kaldırdığımızdan dolayı ekrana basacak bir öğe yok

const ul =document.querySelector('ul') // kaldırmanın daha kolay ve kısa yolu
ul.innerHTML=''