//remove the <main> DOM node
const selectIdMain = document.querySelector("#main");
selectIdMain.remove();
//create an <h1> DOM node
const newHeader = document.createElement("h1")
//set <h1> DOM node to have an id attribute with the value "victory"
//set <h1> DOM node to have the text "Yer Yang is the champion" inside it
newHeader.id = "victory"
newHeader.textContent = "Yer Yang is the champion"
//append the <h1> DOM node to the <body> DOM node of the document
document.body.append(newHeader)