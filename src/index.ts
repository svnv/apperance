
// Reset browser styles
import "normalize.css";

// Code highlightning
import "prismjs/themes/prism-okaidia.css";


import "./ui/containers/containers.scss";
import "./ui/columns/columns.scss";
import "./ui/typography/typography.scss";
import "./ui/navigation/navigation.scss";
import "./ui/buttons/buttons.scss";
import "./ui/forms/forms.scss";
import "./ui/dropdowns/dropdowns.scss";
import "./ui/modals/modals.scss";
import "./ui/examples/examples.scss";

import containers from "./ui/containers/containers.md";
import columns from "./ui/columns/columns.md";
import typography from "./ui/typography/typography.md";
import navigation from "./ui/navigation/navigation.md";
import buttons from "./ui/buttons/buttons.md";
import forms from "./ui/forms/forms.md";
import dropdowns from "./ui/dropdowns/dropdowns.md";
import modals from "./ui/modals/modals.md";
import examples from "./ui/examples/examples.md";

const sections = [
    containers,
    columns,
    typography,
    navigation,
    buttons,
    forms,
    dropdowns,
    modals,
    examples
];

const createElement = (elem:string, className:string) => {
    let node = document.createElement(elem);
    node.className = className;
    return node;
}

document.body.className = "row";
// Add the markdown files to document
let main = createElement("main", "col-9");
main.innerHTML = sections.join("");
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
let aside = createElement("aside", "col-3 sticky");
let nav  = createElement("nav", "vertical");
aside.appendChild(nav);
let menuList  = document.createElement("ul");
nav.appendChild(menuList);
let h1Collection = document.getElementsByTagName("h1");
let linkScrollTops: any = [];
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
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
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
    const active = linkScrollTops.find((x: any) => x.top <= (top + 10));
    linkScrollTops.forEach((x: any) => x.link.className = "" );
    if (!active) return;
    active.link.className = "active";
}, 300);

