const d = document,
    $container = d.querySelector("#container"),
  $fragment = d.createDocumentFragment(),
  $btn = d.createElement("button"),
  $hoverDiv = d.querySelector(".divChildren")

let grid = 256, customerGrid = 16;

createGrid(grid)

d.body.insertAdjacentElement("afterbegin", $btn)
$btn.setAttribute("class", "reset-btn")
$btn.textContent = "RE-START"


function createGrid(grid) {
  for (let i = 1; i <= grid; i++) {
    const divElement = document.createElement("div");
    divElement.setAttribute("class", "divChildren");
    divElement.setAttribute("id", `divChildren${i}`)
    $fragment.appendChild(divElement);
  }
  $container.appendChild($fragment)
  $container.style.gridTemplateColumns = `repeat(${customerGrid}, 1fr)`
  $container.style.gridTemplateRows = `repeat(${customerGrid}, 1fr)`
}
  
function removeElementsDom() {
  while ($container.firstChild) {
    $container.removeChild($container.firstChild)
  }
}

$container.addEventListener("mouseover", (e) => {
  let r, g, b
  r = Math.round((Math.random() * 255) + 1)
  g = Math.round((Math.random() * 255) + 1)
  b = Math.round((Math.random() * 255) + 1)
  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  console.log(`rgb(${r}, ${g}, ${b})`)
})

$btn.addEventListener("click", (grid) => {
  for (let i = 1; i <= grid; i++) {
  d.querySelector(`#divChildren${i}`).removeAttribute("style")
  }
  customerGrid = parseInt(prompt("Dime el número de pixeles que quieres (min 1, max 100)"))
  gridCalculation(customerGrid)
})

function gridCalculation(customerGrid) {
  grid = customerGrid * customerGrid
  removeElementsDom()
  createGrid(grid)
}