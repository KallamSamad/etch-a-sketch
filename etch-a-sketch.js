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



function etch(cellVal){
        for (let gridNum=0;  gridNum < cellVal; gridNum++){
        const gridElement = document.createElement("div")
        gridElement.style.border ="2px solid black"
        gridElement.style.width = "16px"
        gridElement.style.height ="16px"
        gridElement.textContent = " "
        gridElement.classList.add("cell")
        gridElement.onmouseover = function(){
        this.style.backgroundColor = "blue"; };
        grid.appendChild(gridElement)
    }
}

etch(256)
const btn = document.createElement("button")
btn.textContent = "Refresh"
btn.onclick = function(){
   const gridSize=Number(prompt("Enter new grid dimenstions within the range 0-100"))
   if (gridSize>0 && gridSize<=100){
    grid.innerHTML =""
    etch(gridSize**2)
   }
   else{
    alert("invalid value, enter dimension from range 0-100")
   }


}
container.appendChild(btn)
 