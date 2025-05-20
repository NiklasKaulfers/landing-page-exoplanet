"use strict";
const groupData = {
    groups: [
        {
            folder: "group1",
            name: "Gruppe 1",
            text: "A nice group project."
        }, {
            folder: "Planet Discoverers",
            name: "Planet Discoverers",
            text: "The discoverers of planets, that are very far away. And for some unknown reason this text is soooooooo lonnnnnnggggggggggggg. Nobody knows why"
        }, {
            folder: "group3",
            name: "group3",
            text: "this is very much a test"
        }, {
            folder: "group4",
            name: "group4",
            text: "Group 4 was also pretty good."
        }, {
            folder: "TileClicker",
            name: "TileClicker",
            text: "a nice little game to play."
        }
    ]
};
generateCards();
function generateCards() {
    const previewGrid = document.getElementById("preview-grid");
    if (!previewGrid)
        throw new Error("error finding the preview-grid");
    for (const group of groupData.groups) {
        const groupName = group.name;
        const folder = group.folder;
        const groupText = group.text;
        const previewContent = document.createElement("div");
        previewContent.className = "preview-content";
        previewContent.id = folder;
        previewContent.onclick = () => {
            location.href = "./" + folder + "/index.html";
        };
        previewGrid.appendChild(previewContent);
        const previewIFrameDiv = document.createElement("div");
        previewIFrameDiv.className = "preview-iframe";
        previewContent.appendChild(previewIFrameDiv);
        const previewIFrameDisplay = document.createElement("iframe");
        previewIFrameDisplay.className = "preview-iframe-content";
        previewIFrameDisplay.src = "./" + folder + "/index.html";
        previewIFrameDisplay.scrolling = "no";
        previewIFrameDiv.appendChild(previewIFrameDisplay);
        const title = document.createElement("h3");
        title.id = folder + "-name-display";
        title.innerHTML = groupName;
        previewContent.appendChild(title);
        const textForCard = document.createElement("p");
        textForCard.id = folder + "-content-display";
        textForCard.innerHTML = groupText;
        previewContent.appendChild(textForCard);
    }
}
