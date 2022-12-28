const greenBtn = document.createElement("button")
greenBtn.style.cssText =`cursor: pointer;
width: 300px;
min-height: 80px;
background-color: #45bf23;
color: white;`
greenBtn.innerText='click here and watch the txt change!'
document.body.appendChild(greenBtn);
greenBtn.onclick = function(){
    greenBtn.textContent +=` ${greenBtn.innerText}`
}