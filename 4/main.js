let main = document.createElement('main')
document.body.appendChild(main);
let wrapper = document.createElement('div')
let h1 = document.createElement('h1')
main.appendChild(wrapper)
wrapper.appendChild(h1).appendChild(document.createTextNode('My Tasks'))


let list = document.createElement('ol');
list.setAttribute('type','I')
let li = document.createElement('li')
wrapper.appendChild(list).appendChild(li).appendChild(document.createTextNode("user dashboard"))


wrapper.style.cssText=`
width: 400px;
    height: 350px;
    border: 1px solid;
    padding: 10px;
`
h1.style.cssText=`
color: red
`


   

