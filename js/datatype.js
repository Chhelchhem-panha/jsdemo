//data type
//---- 1. string -----

let fistName = "Panha"
let lastName = "Long"

console.log(typeof(fistName))

let favorith = 'Researching and Gaming'
let selfIntroduction = `Hi, greeting from cambodia. I
    ${fistName} ${lastName}, my favarite is
    ${favorith}.
`
console.log(selfIntroduction)
let myApples = '90'
//---- 2. Number -----

let numberOfApples = 180
console.log(typeof(numberOfApples))
let result = numberOfApples / myApples
console.log('------total', result)
// let result = numberOfApples * myApples
// let result = numberOfApples - myApples
// let result = numberOfApples % myApples

// -----backtick

let HEADER = `
    <h1>Welcome, Developer Cambodia</h1>
    <h2>Welcome</h2>   
`

document.querySelector('.heading').innerHTML = HEADER

// 2.Number

let num1 = 123
let num2 = 'abc'
let output = num1 / num2
console.clear()
console.log(output)

//BigInt

// Boolean ( true, false ) - condition

let loading = true
    loading = false

if(loading){
    //show skelaton
}else{
    //show real data
}  

let age 
console.log(age)

//null - empty object

// object

let student = {
    fullname: "Sreyly",
    profile : "https://cdn.pixabay.com/photo/2023/03/24/03/18/boy-7873231_960_720.jpg",
    age : 20,
    favorith : "Play Card",
}

console.log(student.fullname, student.age, student.favorith)
// student null

console.log(student)

document.querySelector('.row').innerHTML = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
                <img src=${student.profile} class="card-img-top" alt="...">
                <div class="card-body border-0 h-100 shadow">
                    <p class="card-text">${student.fullname}</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
                <img src=${student.profile} class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${student.fullname}</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
                <img src=${student.profile} class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${student.fullname}</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
                <img src=${student.profile} class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${student.fullname}</p>
                </div>
            </div>
        </div>
`

