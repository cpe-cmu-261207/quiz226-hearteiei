const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
var k=0
const search = document.querySelector('#search')
const reset = document.querySelector('#reset')
const text = document.querySelector('#text')

btn_toggle.onclick = () => {
  // your code here
  if(k===0){
    var t=parseInt(length.value)+630610721
    author.innerHTML = t
    k++
  }else{
    author.innerHTML = '630610721 KUNASIN TECHASUEB'
    k=0
  }
}
search.onclick = () => {
   console.log(text.innerHTML.indexOf(" ",5))
  
  
}
reset.onclick = () => {
  length.value=5
  color.value="#FF0000"
}
// more codes for Search and Reset buttons here
