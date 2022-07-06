// closure
// java script de istediğimiz kadar iç içe fonksiyon yazabiliriz
// bu durumda iç(inner) fonksiyonun , dış(outer) fonksiyonun değişkenlerine erişmesine closure denir.



function outerFunction(){
    let array=['a','b','c']
    console.log(array) // ['a', 'b', 'c']
    function innerFunction(){
        array.push('d') // burdaki değişikliğin kapsam alanı bu iç fonksiyon olduğundan bu fonksiyon dışında array eski halini alacaktır
        array.unshift('0')
        console.log(array) // ['0', 'a', 'b', 'c', 'd']
        return array
    }
    console.log(array) // ['a', 'b', 'c']
    return innerFunction()
}

console.log(outerFunction()) // ['0', 'a', 'b', 'c', 'd']




function arrayFunction(){
    let num1=55
    let num2=79

    function sum(){ 
        return num1+num2
    }

    function divide(){
        return num1/num2
    }

    return {
        added:sum(),
        divided:divide()
    }
}

console.log(arrayFunction().added)
console.log(arrayFunction().divided)



function personAccount(){
    const firstName = "Murat"
    const lastName = "Şahin"
    const incomes = [100,50,200]
    const expense = [20,50,65,100,30]

    function totalIncome(){
        return incomes.reduce((acc,price)=> acc+price)
    }

    function totalExpense(){
        return expense.reduce((acc,expense)=>acc+expense)
    }

    function accountInfo(){
        return `${firstName} ${lastName} total incomes: ${totalIncome()} total expense: ${totalExpense()}`
    }

    function addIncome(...newIncome){
        newIncome.forEach(inc=>{
            this.incomes.push(inc)
        })
    }

    function addExpense(...newExpense){
        newExpense.forEach(exp=>{
            this.expense.push(exp)
        })
    }

    function accountsBalance(){ // bakiye bilgisi

    }

    return{
        accInfo: accountInfo(),
        totalInc: totalIncome(),
        totalExp: totalExpense(),
        accBalance: accountsBalance()        
    }
}

console.log(personAccount().accInfo)








