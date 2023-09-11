const responsibilities = document.getElementsByClassName("responsibility");
const collapseAllButton = document.querySelector(".collapse-all");
const plus = "+";
const minus = "-";
const more = "more...";
const empty = "< >";

function toggleContent(button, content) {
    const isExpanded = content.classList.contains("responsibility-expanded");
    const isStandard = button.textContent === "+" || button.textContent === "-";
    content.style.height = isExpanded ? "0" : content.scrollHeight + "px";

    setTimeout(() => {
        content.classList.toggle("responsibility-expanded");
    }, 10);

    button.textContent = isStandard
        ? isExpanded ? plus : minus
        : isExpanded ? more : empty;
}

// Add click event listener to the collapse all button
collapseAllButton.addEventListener("click", function() {
    for (const respItem of responsibilities) {
        const content = respItem.querySelector(".responsibility-content");
        if (content.classList.contains("responsibility-expanded")) {
            const button = respItem.querySelector(".expand-button");
            toggleContent(button, content);
        }
    }
});

for (const respItem of responsibilities) {
    const button = respItem.querySelector(".expand-button");
    button.addEventListener("click", function() {
        const content = this.nextElementSibling;
        toggleContent(this, content);
    });
}