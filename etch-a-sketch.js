const container=document.createElement("div")
container.style.backgroundColor = "red"
container.textContent ="Dummy text"
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(16, 20px)";
container.style.gridTemplateRows = "repeat(16, 20px)";
container.style.gap = "1px"; 
document.body.appendChild(container)



for (let gridNum=0;  gridNum <=256; gridNum++){
    const gridElement = document.createElement("div")
    gridElement.style.height = "16px"
    gridElement.style.width = "16px"
    gridElement.style.border ="2px solid black"
    gridElement.textContent = "a"
    container.appendChild(gridElement)
}
