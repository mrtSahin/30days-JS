// classes
// sınıflar
// JS' de Object Oriented Programming(Nesne Yönelimli Programlama) çok zahmetliydi.
// 2015 te yayınlanan EcmaScript6 (ES6) ile artık OOP çok kolay bir hale geldi.
// şimdi ES6 ile çok iyi hale gelen Class kullanımına bakacaz.

// class tanımı
// class isimlendirmeleri CamelCase dir. yani her bir kelime büyük harfle başlar kelimelerin arasına başka hiç bit şey girmez.
// class Calisan{

// }

// class ile oluşturulmuş değişkenlere nesne-örnek denir
// nesne tanımlarken new anahtar kelimesini kullanırız
// const calisan1= new Calisan()
// console.log(calisan1) // Calisan {}


// constructor ile class lara özellikler ekleyebiliriz.
class Calisan{
    constructor(isim, soyIsim){ // constructor lar parametre alabilirler.
        this.isim=isim // this.  class ın kendisini işaret eder.
        this.soyIsim=soyIsim // bir bir değişken alıyoruz ama onu class la ilişkendirmek için this anahtar kelimesini kullanıyoruz.
        // eğer bunu yapmazsak class içerisinde ve oluşturduğumuz nesne içerisinde bu özelliklere erişemeyiz.
    }
}

const calisan1=new Calisan("Murat","Şahin")
console.log(calisan1.isim,calisan1.soyIsim) // 22 ve 23. satırları yorum satırı yaparak bu değişkenlere 
//erişemiyeceğimizi görebiliriz. bu durumda çıktı  undefined undefined  şeklinde olacaktır

const calisan2 =new Calisan()
console.log(calisan2.isim,calisan2.soyIsim) // bu özellikleri eklemediğimizden   undefined undefined  olacaktır
// bu özellikleri daha sonradan da ekleyebiliriz
calisan2.isim="Mahmut"
calisan2.soyIsim="Kara"
console.log(calisan2.isim,calisan2.soyIsim) // Mahmut Kara


class Kisi{ 
    constructor(isim='bilinmiyor',soyIsim='bilinmiyor',yas=0,sehir='evren'){ // özelliklerin default durumları olabilir
        this.isim=isim
        this.soyIsim=soyIsim
        this.yas=yas
        this.sehir=sehir
    }
}

const kisi1=new Kisi()
const kisi2=new Kisi("Murat","Şahin",20,"Sivas")
console.log(kisi1) // Kisi {isim: 'bilinmiyor', soyIsim: 'bilinmiyor', yas: 0, sehir: 'evren'}
console.log(kisi2) // Kisi {isim: 'Murat', soyIsim: 'Şahin', yas: 20, sehir: 'Sivas'}

// bir nesneye daha sonradan farklı bir özellik ekleyebiliriz. bu özellik sadece bu nesne için geçerlidir.
kisi2.meslek="Yazılım"
console.log(kisi1) // Kisi {isim: 'bilinmiyor', soyIsim: 'bilinmiyor', yas: 0, sehir: 'evren'}
console.log(kisi2) // Kisi {isim: 'Murat', soyIsim: 'Şahin', yas: 20, sehir: 'Sivas', meslek: 'Yazılım'}




// class larin kendi içerisinde metodları olabilir
// class Insan{
//     constructor(isim,soyIsim,yas){
//         this.isim=isim
//         this.soyIsim=soyIsim
//         this.yas=yas
//     }

//     getTamIsim(){
//         return this.isim+" "+this.soyIsim
//     }
    
// }

// const insan1=new Insan("Kadir","Cücener",19)
// console.log(insan1.getTamIsim()) // Kadir Cücener


// bir metod normal , getter ya da setter metod olabilir
// getter - setter
// getter metod nesnenin verilerine erişmemize izin verir. fonksiyon ismnin önüne get kelimesi konur. özelliklere doğrudan erişmek yerine değeri almak için getter ı kullanırız
// setter metod nesnenin mevcut özelliği üzerinde değişiklik yapmamıza izin verir. metodun isminin önüne set kelimesini koyarız. setter metodlar parametre alırlar
class Insan{
    constructor(isim,soyIsim,yas){
        this.isim=isim
        this.soyIsim=soyIsim
        this.yas=yas
        this.puan=0
        this.yetenekler=[]
    }

    getTamIsim(){
        const tamIsim =this.isim+" "+this.soyIsim
        return tamIsim
    }

    get getYas(){
        return this.yas
    }
    get getIsim(){
        return this.isim
    }
    set setPuan(newPuan){
        this.puan+=newPuan
    }
    set setYetenkler(newYetenek){
        this.yetenekler.unshift(newYetenek)
    }

    getInsanBilgisi(){
        const tamIsim=this.isim+" "+this.soyIsim
        const tempYetenekler = this.yetenekler.slice()
        const info = `${tamIsim} ${this.yas} yaşındadır. Puanı: ${this.puan}. Yetenekleri: ${tempYetenekler}`
        return info
    }
    
    // static metodlar. nesne üzerinden değil direkt class üzerinden çağırılırlar. Math.random() gibi. Math bir classtır 
    // ama random() metodu static bir metod olduğundan dolayı nesne üzerinden değil class üzerinden çağırılır.
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }
    
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}


const insan1 = new Insan("Murat","Şahin",20)
console.log(insan1)
console.log(insan1.getIsim)
insan1.setYetenkler = "Js" // setter metod kullanımı diğer metodlardan biraz farklıdır. kesinlikle değer ya da değerler alacağından dolayı atam yapara değerleri yolluyoruz
insan1.setYetenkler = "Python"
console.log(insan1.yetenekler)
insan1.setPuan = 58
console.log(insan1.puan)
console.log(insan1.getInsanBilgisi())

console.log(Insan.showDateTime()) // class üzerinden çağırdık





// inheritence - kalıtım - miras
// kalıtım, parent class ın özelliklerine ve metodlarına child class da erişmek için kullanılır.
// miras alan class a child class, veren class a parent class denir
// Insan class ımız parent classdır şimdi child class ı oluşturalım

class Ogrenci extends Insan{ // miras alabilmek için extends anahtar kelimesini kullanırız
    bisiDe(){
        console.log("bisi")
    }
}

const ogrenci1=new Ogrenci("Yakut","Toprak",27)
ogrenci1.bisiDe()
console.log(ogrenci1.isim) // Ogrenci class ında nerdeyse hiçbir tanımlama ve metod yapmadık ama kalıtım yaptığımızdan dolayı parent classımız(Insan) içerisindeki her şeye erişebiliyoruz

// ayrıca şu şekilde de bir child class oluşturabiliriz
class Ogretmen extends Insan{
    constructor(isim,soyIsim,yas,brans,okul){ // parent class a göre ekstra iki özelliğimiz var(brans,okul). parent class bunlara
    // erişemez bu özellikler Ogretmen ve Ogretmen classını miras alan classlar için geçerli
    super(isim,soyIsim,yas) // şimdi bu değerleri aldık ama parent classa bildirmemiz gerekli. bunu da super() ile yapıyoruz. ayrıca bu sayede burda da this.isim=isim  this.soyIsim=soyIsim  this.yas=yas  kodlarını yazmadık. bu işlem parent classda halledildi
    this.brans = brans // ama bu classa has özellikleri yapmalıyız
    this.okul=okul
    }
    get getOkul(){
        return this.okul
    }
    set setOkul(newOkul){
        this.okul=newOkul
    }
    get getBrans(){
        return this.brans
    }
    set setBrans(newBrans){
        this.brans=newBrans
    }// bu class a ait özellikler

    //override . eğer parent classdaki metodları bu class için özelliştirmek istersek override(geçersi kılma) yaparız
    // parent classdaki metod ismiyle aynı isimde metod oluşturursak bu metodu override etmiş oluruz
    getInsanBilgisi(){
        const tamIsim=this.isim+" "+this.soyIsim
        const info = `${tamIsim} ${this.yas} yaşında bir öğretmendir. Görev yeri: ${this.okul}. Branşı: ${this.brans}`
        return info
    }

}

const ogretmen= new Ogretmen("Yelda","Pınar",38,"İngilizce","Ali Baba İlk Okulu")

ogretmen.setOkul = "Kırk Haramiler Orta Okulu"
console.log(ogretmen.getInsanBilgisi())







