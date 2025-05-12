const GROUP_AMOUNT: number = 4;
const EMPTY_GROUPS: number[] = [];

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

    for (let i: number = 1; i <= GROUP_AMOUNT; i++) {
        if (EMPTY_GROUPS.includes(i)) continue;
        const previewContent = document.createElement("div");
        previewContent.className = "preview-content";
        previewContent.id = "previewContent" + i;
        previewContent.onclick = () => {
            location.href = "./group" + i + "/index.html";
        }
        previewGrid.appendChild(previewContent);

        const previewIFrameDiv = document.createElement("div");
        previewIFrameDiv.className = "preview-iframe";

        previewContent.appendChild(previewIFrameDiv);

        const previewIFrameDisplay = document.createElement("iframe");
        previewIFrameDisplay.className = "preview-iframe-content";
        previewIFrameDisplay.src = "./group" + i + "/index.html";
        previewIFrameDisplay.scrolling = "no";

        previewIFrameDiv.appendChild(previewIFrameDisplay);

        const title = document.createElement("h3");
        title.id = "group" + i + "-name-display";
        title.innerHTML = "Gruppe " + i;

        previewContent.appendChild(title);

        const textForCard = document.createElement("p");
        textForCard.id = "group" + i + "-content-display";
        textForCard.innerHTML = "Text goes here";

        previewContent.appendChild(textForCard);
    }
}

