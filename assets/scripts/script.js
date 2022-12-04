const packages = document.querySelector("#packages");
const steve = document.querySelector("#steve");

const packageList = [
    {title: "rankwidth: revbump for igraph-0.10.2.", link: "https://github.com/void-linux/void-packages/commit/7edbd2548e53353a5aa52dc6ec2c3e5571015216"},
    {title: "igraph: update to 0.10.2.", link: "https://github.com/void-linux/void-packages/commit/771ba9b3724b231f8beb3842f0957653e34daf44"},
    {title: "opencamlib: rebuild for vtk 9.2.2", link: "https://github.com/void-linux/void-packages/commit/6e1a9f0f3dfa149ec183ff2b374014d26726f632"},
    {title: "freecad: rebuild for vtk 9.2.2", link: "https://github.com/void-linux/void-packages/commit/1178131f6cf081d1f24c6f92ac4f22563b8c2ebc"},
    {title: "vtk: update to 9.2.2", link: "https://github.com/void-linux/void-packages/commit/93d6b4117736f44d1dceabc2747a4aff5540b8bc"},
    {title: "stepmania: fix build with gcc 12, ship ffmpeg 2.1.3 with distfiles", link: "https://github.com/void-linux/void-packages/commit/8078afbed40b7d998f30aad8e38defbd106e60c6"},
    {title: "pass-import: update to 3.3.", link: "https://github.com/void-linux/void-packages/commit/2b44e7a1650a6f65a6b453210f23aaebba84c0f4"},
    {title: "zutty: patch for Python 3.11", link: "https://github.com/void-linux/void-packages/commit/8f907525563fdfffff186949fb5d832d039dd008"},
    {title: "saldl: fix build with Python 3.11", link: "https://github.com/void-linux/void-packages/commit/7f7dc74acef0a5abb8c0df7af17b9ca53925a05d"},
    {title: "New package: libdrm-test-progs-2.4.113", link: "https://github.com/void-linux/void-packages/commit/874a01184f9a52d475b14ac1a9846f24ae09d128"}
];

const steveList = [
    {title: "ci: coverity scan install and use curl", link: "https://github.com/void-linux/xbps/commit/c7a88e5013ba1ab618557d39598700cd10815ac9"},
    {title: "ci: fix coverity scan PATH", link: "https://github.com/void-linux/xbps/commit/eaf47d6e06d224cc91c96a84ebaca58d7e2ba321"},
    {title: "ci: fix coverity scan build command", link: "https://github.com/void-linux/xbps/commit/4dd9d17e0846224c2396bd611e0c2f56d969c6cd"},
    {title: "ci: allow triggering coverity-scan manually", link: "https://github.com/void-linux/xbps/commit/3a2162b668d5a5fb92132e727c229222dd86edcb"},
    {title: "ci: use ghcr void containers in coverity-scan", link: "https://github.com/void-linux/xbps/commit/46522edb2b5dfc0753ae25549fac201518459dc3"},
    {title: "fix minor mistake in README", link: "https://github.com/void-linux/xbps/commit/4ee3960377a2c678d2325e854f48720cd2f6120a"},
    {title: "ci: switch to full images", link: "https://github.com/void-linux/xbps/commit/061f5cb2e95047d20b4147d3f3b41150ce6a325c"},
    {title: "ci: fix docker images", link: "https://github.com/void-linux/xbps/commit/5210a063ec817bbbb8cdd84511634acb059458b3"},
    {title: "ci: only run coverity-scan on void-linux/xbps repo", link: "https://github.com/void-linux/xbps/commit/56799d884385c6adf615af0055e04a7188df6cb1"},
    {title: "ci: update base CI images", link: "https://github.com/void-linux/xbps/commit/9dfeb8a0db0395b041919f24ad1620913af2d582"}
    
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