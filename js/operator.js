//----- Assignment operator

let firstName = " Jonh"
let num1 = 50
num1 += 50
console.log(num1)
let num2 = 110
num2 -=10
console.log(num2)

//----- String Operator
let fullname = "Sorn"
fullname += firstName
console.log(fullname)

let student1 = {
    fullname: "Sreyly",
    profile : "https://cdn.pixabay.com/photo/2023/03/24/03/18/boy-7873231_960_720.jpg",
    age : 20,
    favorith : "Play Card",
}

let student2 = {
    fullname: "Dany",
    profile : "https://cdn.pixabay.com/photo/2023/03/24/03/18/boy-7873231_960_720.jpg",
    age : 20,
    favorith : "Play Card",
}
let student3 = {
    fullname: "Ream",
    profile : "https://cdn.pixabay.com/photo/2023/03/24/03/18/boy-7873231_960_720.jpg",
    age : 20,
    favorith : "Play Card",
}
let student4 = {
    fullname: "Srey Noch",
    profile : "https://cdn.pixabay.com/photo/2023/03/24/03/18/boy-7873231_960_720.jpg",
    age : 20,
    favorith : "Play Card",
}

let products = [student1, student2, student3, student4]
console.log(products)
let ROW = document.querySelector(".row")



//----- Arithmatic Operator -----(+, -, *, /, )
console.clear()
let age = 25
let myFriendAge = ++age
console.log(`my friend age: ${myFriendAge}, and me: ${age}`)

let result = 3**2 // 3^2
console.log(result)
document.write(`
<h1>let result = 3**2 is equal to 3 <sup>2</sup></h1>`)

// -----Comparison Operator

let a = 50
let b = 50

if(a == b) {
    alert("Yes! a is not aqual to b")
} else {
    alert("No! a is aqual to b")
}

//----- Logical Operator

const x = 5, y = 3

console.log((x < 6 && y < 4))

//Ternary Operator
//condition ? expression_1 : expression_2

let Age = 18
let output = Age >= 18 ? "You are legal to vote": "You are not legal to vote"
console.log(output)


let loading = true

let noData = document.querySelector(".noData")
let hasData = document.querySelector(".data")

let feedback = prompt("Do you want to see Data?")
console.log(feedback)

feedback != "yes" ? noData.innerHTML +=`
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card" aria-hidden="true">
        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          <a class="btn btn-primary disabled placeholder col-6"></a>
        </div>
      </div>
</div>


`
:

products.map(products => ROW.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <img src="${products.profile}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${products.favorith}</p>
            </div>
        </div>
    </div>
`)
