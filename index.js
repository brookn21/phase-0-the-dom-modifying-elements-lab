// Write your code here!

function removeElement(){
const main = document.querySelector("#main")

main.remove()
}

removeElement()

const main = document.querySelector("#main")
const newHeader = document.createElement("h1")
newHeader.id= ('victory')
newHeader.textContent = "Brook is the champion"
main.append(newHeader)


