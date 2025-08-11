const container=document.createElement("div")
container.style.backgroundColor = "red"
container.textContent =""
container.style.gap = "1px"; 
container.style.width ="355px"
container.classList.add("container")
document.body.appendChild(container)

const grid =document.createElement("div")
grid.style.backgroundColor = "red"
grid.textContent =""
grid.style.gap = "1px"; 
grid.style.width ="355px"
grid.classList.add("grid")
container.appendChild(grid)



for (let gridNum=0;  gridNum < 16*16; gridNum++){
    const gridElement = document.createElement("div")
    gridElement.style.height = "16px"
    gridElement.style.width = "16px"
    gridElement.style.border ="2px solid black"
    gridElement.textContent = "a"
    gridElement.classList.add("cell")
    gridElement.onmouseover = function(){
        this.style.backgroundColor = "blue"; };
    grid.appendChild(gridElement)
}
 

 