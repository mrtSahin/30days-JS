// json
// JSON JavaScript Object Notation (JavaScript Nesne Gösterimi) kısaltmasıdır.
// JSON, insanlar için okunabilir olan bilgi saklama ve alışveriş formatıdır
// JSON, JavaScript nesne gösterim biçiminde yazılmış metinlerdir.
// JSON kolay ve hafif yapısı sayesinde XML gibi veri alışverişinde fazla yer kaplayan yapılara alternatif olarak kullanılır.

// örnek JSON gösterimi
// {
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     }
// }


// bu şekilde veriler bizim hiçbir işimize yaramaz. bu veriyi kullanabilmek için 
// JavaScript objesine çevirmemiz gerekli 
// JSON u objeye çevirmek için JSON classının JSON.parse() metdounu,
// objeyi JSON a çevirmek için JSON.stringify() metodunu kullanılırız.

const usersJSON = `{
    "users":[
      {
        "firstName":"Murat",
        "lastName":"Şahin",
        "age":20
      },
      {
        "firstName":"Kadir",
        "lastName":"Kaymak",
        "age":29
      },
      {
      "firstName":"Layla",
      "lastName":"Queen",
      "age":33
      }
    ]
}`

const usersObj = JSON.parse(usersJSON,undefined)
console.log(usersObj) // {users: Array(3)}

const usersObj2=JSON.parse(usersJSON,(key,value)=>{
    if(key=="lastName"){ // soyadı değerlerini büyük harf yaptı
        return value.toUpperCase()
    }else{
        return value
    }
})
console.log(usersObj2)



// objeden JSON a çevirme
const users =[ 
    {
        firstName: 'Murat',
        lastName: 'Şahin',
        age: 20,
        country: 'Türkiye',
        city: 'Sivas',
        skills: ['Java','Python','JavaScript','Kotlin','C++','PostgreSQL',],
        isMarried: false,
        'phone number': '+901111111111'
    },
    {
        firstName: 'Yakup',
        lastName: 'Can',
        age: 21,
        country: 'Türkiye',
        city: 'İzmir',
        skills: ['Java','Kotlin'],
        isMarried: false,
        'phone number': '+903333333333'
    },
    {
        firstName: 'Mehmet',
        lastName: 'Karatepe',
        age: 24,
        country: 'America',
        city: 'Florida',
        skills: ['JavaScript','React','Vue','Angular','Linux'],
        isMarried: true,
        'phone number': '+902222222222'
    }
]

const usersJson=JSON.stringify(users,undefined,4)// (obj, replacer, space)   replacer ve space opsiyonel
// replacer filtreleme işlemi görür. sadece bizim belirttiklerimizi json a katar.
console.log(usersJson)

const usersJson2=JSON.stringify(users,['firstName','lastName','skills'],4)
console.log(usersJson2)// sadece 'firstName','lastName','skills' değişkenlerinin içerisinde bulunduğu bir json oluşturdu