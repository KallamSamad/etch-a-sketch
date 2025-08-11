const container=document.createElement("div")
container.style.backgroundColor = "red"
container.textContent =""
container.style.gap = "1px"; 
container.style.width ="355px"
container.classList.add("container")
document.body.appendChild(container)



for (let gridNum=0;  gridNum < 16*16; gridNum++){
    const gridElement = document.createElement("div")
    gridElement.style.height = "16px"
    gridElement.style.width = "16px"
    gridElement.style.border ="2px solid black"
    gridElement.textContent = "a"
    container.appendChild(gridElement)
}
