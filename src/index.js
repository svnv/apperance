
// Reset browser styles
require("normalize.css");

// Code highlightning
require("prismjs/themes/prism-okaidia.css");

// Groups in the order they are rendered
var elements = [
    {
        doc: require("./ui/containers/containers.md"),
        style: require("./ui/containers/containers.scss")
    },
    {
        doc: require("./ui/columns/columns.md"),
        style: require("./ui/columns/columns.scss")
    },
    {
        doc: require("./ui/typography/typography.md"),
        style: require("./ui/typography/typography.scss")
    },
    {
        doc: require("./ui/navigation/navigation.md"),
        style: require("./ui/navigation/navigation.scss")
    },
    {
        doc: require("./ui/buttons/buttons.md"),
        style: require("./ui/buttons/buttons.scss")
    },
    {
        doc: require("./ui/forms/forms.md"),
        style: require("./ui/forms/forms.scss")
    },
    {
        doc: require("./ui/modals/modals.md"),
        style: require("./ui/modals/modals.scss")
    },
    {
        doc: require("./ui/examples/examples.md"),
        style: require("./ui/examples/examples.scss")
    },
];



const createElement = (elem, className) => {
    let node = document.createElement(elem);
    node.className = className;
    return node;
}

document.body.className = "row";
// Add the markdown files to document
let main = createElement("main", "col-9");
main.innerHTML = elements.map( m => m.doc).join("");
document.body.appendChild(main);


// Generate examples from the code blocks
var preCollection = document.getElementsByTagName("pre");
var pres = [].slice.call(preCollection)
for (let pre of pres) {
    let demo = createElement("div", "example")
    demo.innerHTML = pre.innerText;
    pre.parentNode.insertBefore(demo, pre);
}


// Menu with scrollspy
let aside = createElement("aside", "col-3");
let nav  = createElement("nav", "vertical fixed");
aside.appendChild(nav);
let menuList  = document.createElement("ul");
nav.appendChild(menuList);
let h1Collection = document.getElementsByTagName("h1");
let linkScrollTops = [];
for (let h1 of h1Collection) {
    const elemId = h1.getAttribute("id");
    if (!elemId) continue;
    const anchor = `#${elemId}`;
    let link = document.createElement("a");
    link.href = anchor;
    link.innerHTML = h1.innerText;
    let listItem  = document.createElement("li");
    listItem.appendChild(link);
    menuList.appendChild(listItem);
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
    linkScrollTops.unshift({
        top: h1.getBoundingClientRect().top + scrollTop,
        link: link
    });
}
document.body.insertBefore(aside, main);
function getBodyScrollTop(){
    const el = document.scrollingElement || document.documentElement;
    return el.scrollTop;
}
window.setInterval(()=>{
    const top = getBodyScrollTop();
    active = linkScrollTops.find(x => x.top <= (top + 10));
    linkScrollTops.forEach(x => x.link.className = "" );
    if (!active) return;
    active.link.className = "active";
}, 300);

