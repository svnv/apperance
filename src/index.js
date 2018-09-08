
// Reset browser styles
require("normalize.css");
require("highlight.js/styles/github.css");

// Elements in the order it has to appear
var elements = [
    {
        doc: require("./ui/typography/typography.md"),
        style: require("./ui/typography/typography.scss")
    },
    {
        doc: require("./ui/containers/containers.md"),
        style: require("./ui/containers/containers.scss")
    },
    {
        doc: require("./ui/examples/examples.md"),
        style: require("./ui/examples/examples.scss")
    },
    {
        doc: require("./ui/buttons/buttons.md"),
        style: require("./ui/buttons/buttons.scss")
    }
];


// Add an render markdown files to document
var div = document.createElement("div");
div.className = "container";
div.innerHTML = elements.map( m => m.doc).join("");
document.body.appendChild(div);


// Generate examples from the code blocks
var preCollection = document.getElementsByTagName("pre");
var pres = [].slice.call(preCollection)
for(let pre of pres){
    console.log(pres.length);
    let demo = document.createElement("div");
    demo.innerHTML = pre.innerText;
    demo.className = "example";
    pre.parentNode.insertBefore(demo, pre);
}
