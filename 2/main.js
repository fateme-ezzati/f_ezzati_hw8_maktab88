
const element = document.createElement("button")
document.body.appendChild(element);
element.innerText = 'hover over me!'
 element.style.cssText =`cursor: pointer;
 width: 300px;
 min-height: 80px;
 background-color: blue;
 color: white;`

 element.onmouseover =  function (){
    element.style.backgroundColor = 'red'
 }
 element.onmouseleave =  function (){
    element.style.backgroundColor = 'blue'
 }

