const packages = document.querySelector("#packages");
const steve = document.querySelector("#steve");

const packageList = [
    {title: "aaaaaaaaaa", link: "https://scp-wiki.wikidot.com/random:random-page"},
    {title: "aaaaAAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "aa", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "aAAAAaaAAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "AAAAAAaaaa", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "aaaaAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "aaAAAAAAaaaAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "aAaAaAaAaAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "aaaAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "aAAAAAaA", link: "https://scp-wiki.wikidot.com/random:random-page"}
];

const steveList = [
    {title: "AAAAAAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "AAAAAAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "AAAAAAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "AAAAAAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "AAAAAAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "AAAAAAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "AAAAAAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "AAAAAAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "AAAAAAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    {title: "AAAAAAAAA", link: "https://scp-wiki.wikidot.com/random:random-page"}, 
    
];

for (let i = 0; i < packageList.length; i++) {
    let entry = document.createElement("a");
    entry.setAttribute("href", packageList[i].link);
    entry.textContent = packageList[i].title;
    let listEntry = document.createElement("li");
    listEntry.appendChild(entry);
    packages.appendChild(listEntry);
};

for (let i = 0; i < steveList.length; i++) {
    let entry = document.createElement("a");
    entry.setAttribute("href", steveList[i].link);
    entry.textContent = steveList[i].title;
    let listEntry = document.createElement("li");
    listEntry.appendChild(entry);
    steve.appendChild(listEntry);
};