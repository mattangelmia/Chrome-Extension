// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
let myLeads = []
const button = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
// let inputText = inputEl.value
const ulEl = document.querySelector("#ul-el")


button.addEventListener("click", addText)

function addText() {
console.log(inputEl.value)
myLeads.push(inputEl.value)
console.log(myLeads)
render()

}


function render(){
  
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++) {
        // console.log(myLeads[i])
        listItems += "<li>"   + myLeads[i] + "</li>"
        ulEl.innerHTML = listItems
        //   create element
        // set text content
        // append to ul
    //    let li =  document.createElement('li')
    //    li.textContent = myLeads[i]
    //    console.log( li.textContent)
    //    ulEl.appendChild(li);
       
    }
}












// const container = document.getElementById("container")
// container.innerHTML = "<button>Buy!</button>"
// const button  = document.querySelector("button") 
// // When clicked, render a paragraph under the button (in the container)
// // that says "Thank you for buying!"
// console.log(button)
// button.addEventListener('click', buy)
// // function renderPara(){
// //     container.innerHTML += "<p>Thank you for buying!</p>" 
// // }
// function buy(){
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }
