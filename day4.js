
let yagmurlumu=true
if(yagmurlumu){
    console.log("Şimsiye al")
}else{
    console.log("Şimsiye alma")
}

// if else koşu ture ise if bloğunun false ise else bloğunun içerisine girer
// eğer false durumunda if bloğuna true durmunda else bloğuna girmesini istersek 
// !yagmurlumu şeklinde yazarak ünlem işareti ile durumu tersine çevirebiliriz.

let harf='a'
if(harf=='a'){
    console.log("harf a harfidir")
}else if(harf=='b'){
    console.log("harf b harfidir")
}else if(harf=='c'){
    console.log("harf c harfidir")
}else{
    console.log("harf a,b,c değildir")
}// bu şekilde peşpeşe if else bloklarını yerleştirerek kontrol yapabiliriz. ama bunun gibi fazla durumlu anlarda switch case kullanıyoruz


switch(harf){
    case 'a':
        console.log("harf a harfidir")
        break  // burda koşulun sağlandıktan sonra ve bloğa girdikten sonra switch içerisinden çıkması için break kullanıyoruz
    case 'b':
        console.log("harf b harfidir")
        break  // burda koşulun sağlandıktan sonra ve bloğa girdikten sonra switch içerisinden çıkması için break kullanıyoruz
    case 'c':
        console.log("harf c harfidir")
        break  // burda koşulun sağlandıktan sonra ve bloğa girdikten sonra switch içerisinden çıkması için break kullanıyoruz
    default:
        console.log("harf a,b,c değildir")
        break
}
