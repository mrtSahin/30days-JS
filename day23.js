//  Event Listener - Olay Dinleyiciler
// her hangi bir dom objesiine event listener ekleyebiliriz
// farklı html öğelerini dinleyebilmek için addEventListener() metodunu kullanırız
// bu metod bize iki değer döndürür: event listener ve callback fonksiyon





// click
const button=document.querySelector('button')
button.addEventListener('click',e=>{
    console.log("e event listener objesi verir: "+e)// [object PointerEvent]
    console.log("e.target seçilen öğeyi verir: "+e.target)// [object HTMLButtonElement]
    console.log("e.target.textContent seçilen öğenin içeriğini verir: "+e.target.textContent)// Bana Bas
})

//click
// öğeye doğrudan fonksiyon eklenebilir.
// böylece öğeyi ayrıca almamıza gerek kalmaz. sadece metod ismiyle işlem yapılabilir
const button1=()=> {
    alert("HTML öğesine event ekleyebiliriz")
}

// dblclick
const button3=document.querySelector('#button3')
button3.addEventListener('dblclick',e=>{
    console.log("e event listener objesi verir: "+e) // [object MouseEvent]
    console.log("e.target seçilen öğeyi verir: "+e.target) // [object HTMLButtonElement]
    console.log("e.target.textContent seçilen öğenin içeriğini verir: "+e.target.textContent)// Bana Bas 3
})


// mouseenter
// mouse üzerine gelince devreye girer.
// tıklanmasına gerek yok
const button4=()=>{
    console.log("button 4 onmouseenter")
    let h1=document.createElement('h1')
    h1.innerHTML='Sivas'
    document.body.appendChild(h1)
}


// mouseleave - fare işaretçisi öğeden ayrıldığında
// mousemove - fare işaretçisi öğe üzerinde hareket ettiğinde
// mouseover - fare işaretçisi öğe üzerinde hareket ettiğinde
// mouseout - fare işaretçisi öğeden dışarı çıktığında
// input - değer giriş alanına girildiğinde
// change -giriş alanında değer değiştiğinde
// blur -öğe odaklanmadığında
// keydown - bir tuş kapalıyken
// keyup - bir anahtar açıkken
// keypress - herhangi bir tuşa bastığımızda
// onload - tarayıcı bir sayfayı yüklemeyi bitirdiğinde




// input value
const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const buttonB = document.querySelector('#buttonB')
let bmi
buttonB.addEventListener('click', () => {
    bmi = mass.value / height.value ** 2
    alert(`your bmi is ${bmi.toFixed(2)}`)
    console.log(bmi)
})



// anlık girdiyi yazdırma
const input1=document.querySelector("#input1")
const p1=document.querySelector("#p1")

input1.addEventListener('input',e=>{
    p1.textContent=e.target.value
})


// girdiden sonra başka bir yere basınca çalışır
const input2=document.querySelector("#input2")
const p2=document.querySelector("#p2")

input2.addEventListener('blur',e=>{
    p2.textContent=e.target.value
    p2.style.color='red'
})




// keypress, keydown ve keyup
// klavyeden hangi tuşlara basıldığını izleyebiliriz

// keydown tuşa indiğinde çalışır
// keyup tuşa basıldıktan sonra tuş kalktığında çalışır
const p3=document.querySelector("#p3")
document.body.addEventListener('keyup',e=>{
    p3.textContent=e.keyCode // keycode ile tuşun ikilik değerinin onluk karşılığını verir
})

