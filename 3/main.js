let parentBox = document.createElement('div')
document.body.appendChild(parentBox);
parentBox.setAttribute('id','parentBox')

parentBox.style.cssText = `
    width: 450px;
    min-height: 200px;
    background-color: #21c721;
    border : 1px solid black;
    padding : 5px
   `
parentBox.innerHTML = '<p>parent node`s text.</p><div id="middleBox"></div>'
let middleBox = document.getElementById("middleBox")
middleBox.style.cssText = `
   width: 300px;
   min-height: 150px;
   border : 1px solid black;
   margin : 10px
   `
middleBox.innerHTML = '<p>target node`s text.</p> <div id="childBox"><p>child node`s text.</p></div>'
let childBox = document.getElementById('childBox')
childBox.style.cssText = `
    width: 200px;
    min-height: 100px;
    border : 1px solid black;
    margin : 10px
    `

document.body.innerHTML +=
    '<button id="copyParent">copy parent text</button> <button id="copyChild">copy child text.</button>'
let copyParent = document.getElementById('copyParent')
let copyChild = document.getElementById('copyChild')
btnStyle(copyParent)
btnStyle(copyChild)

function btnStyle(element) {
    element.style.cssText = `
      margin : 20px 10px;
      cursor: pointer;
   `
}

//chera baz nacharan boxha ro gereftam
copyChild.onclick = function () {
    let middleBox = document.getElementById('middleBox')
    let childBox = document.getElementById('childBox')
    let text = middleBox.firstChild.innerText + " " + childBox.firstChild.innerText
    middleBox.firstChild.innerText = `${text}`
}

copyParent.onclick = function () {
    let parentBox = document.getElementById('parentBox')
    let middleBox = document.getElementById('middleBox')
    let childBox = document.getElementById('childBox')
    let text = parentBox.firstChild.innerText+ " " + middleBox.firstChild.innerText + " " + childBox.firstChild.innerText 
    middleBox.firstChild.innerHTML = `${text}`
    console.log(parentBox.firstChild.innerText)
}

