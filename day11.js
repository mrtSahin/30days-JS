// destructuring , spread , rest

// destructuring  : imha etme
// dizi ve obje elemanlarının her birini farklı bir değişkene atamanın bir yolu
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack
  
console.log(frontEnd)
console.log(backEnd)


let population = [1000,5000,10000,15000,30000]
let [verySmall,small, ,veryHigh,highest]=population // eğer bir değeri almak istemiyorsak onun denk geldiği yeri boş bırakırız
console.log(verySmall,small,veryHigh,highest)


const names = [undefined, 'Furkan', 'Necip'] // dizinin değerinin o indeks için tanımsız olması durumunda varsayılan değeri kullanabiliriz.
let [
  firstPerson = 'Murat',
  secondPerson,
  thirdPerson,
  fourthPerson = 'Kadir'
] = names
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)


// spread
// dizi açmak için kullanılır
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(...nums)

console.log(Math.max(nums)) // NaN  : not a number . içerisine sayılar alır ama bunu bu şekilde direkt dizi olarak veremeyiz. burda diziyi açıp vermemiz gerekir.
// bunu da spread ile kolayca yapabiliriz.
console.log(Math.max(...nums)) // 10


// rest : geri kalan
// destruct yaparken bir noktadan sonrasın başka bir diziye atabilmek veya
// fonksiyonlarda da belirli bir parametreden sonrasını diziye alabilmek için kullanılır

let numbes =[5,8,6,2,6,65,652,2,66,87,32]
let [one,two,three,four,five,six,...rest]=numbes
