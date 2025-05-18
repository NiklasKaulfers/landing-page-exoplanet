const groupData = {
    groups: [
        {
            name: "group1",
            text: "A nice group project."
        },{
            name: "Planet Discoverers",
            text: "The discoverers of planets, that are very far away"
        },{
            name: "group3",
            text: "this is very much a test"
        }, {
            name: "group4",
            text: "Group 4 was also pretty good."
        }
    ]
}

generateCards();
updatedCardContents();
// use this to change the text in the cards
function updatedCardContents(){
    const group1Title = document.getElementById("group1-name-display");
    if (group1Title) group1Title.innerHTML = "Super Gruppe";
}


function generateCards() {
    const previewGrid: HTMLElement | null = document.getElementById("preview-grid");

    if (!previewGrid) throw new Error("error finding the preview-grid")

    for (const group of groupData.groups) {
        const groupName: string = group.name;
        const groupText: string = group.text;


        const previewContent = document.createElement("div");
        previewContent.className = "preview-content";
        previewContent.id = groupName;
        previewContent.onclick = () => {
            location.href = "./" + groupName + "/index.html";
        }
        previewGrid.appendChild(previewContent);

        const previewIFrameDiv = document.createElement("div");
        previewIFrameDiv.className = "preview-iframe";

        previewContent.appendChild(previewIFrameDiv);

        const previewIFrameDisplay = document.createElement("iframe");
        previewIFrameDisplay.className = "preview-iframe-content";
        previewIFrameDisplay.src = "./" + groupName + "/index.html";
        previewIFrameDisplay.scrolling = "no";

        previewIFrameDiv.appendChild(previewIFrameDisplay);

        const title = document.createElement("h3");
        title.id = groupName + "-name-display";
        title.innerHTML = groupName;

        previewContent.appendChild(title);

        const textForCard = document.createElement("p");
        textForCard.id = groupName + "-content-display";
        textForCard.innerHTML = groupText;

        previewContent.appendChild(textForCard);
    }
}

