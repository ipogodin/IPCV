/*const coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  // Add click event listener to each collapsible item
  coll[i].addEventListener("click", function() {
    // Toggle the "active" class for the current item
    this.classList.toggle("active");
    // Get the collapsible content for the current item
    var content = this.nextElementSibling;
    // If the content is already expanded, collapse it
    if (content.classList.contains("expanded")) {
      content.classList.remove("expanded");
      content.style.height = "0";
    } else {
      // Otherwise, expand the content
      content.classList.add("expanded");
      content.style.height = content.scrollHeight + "px";
    }
  });
}

*/

var resp = document.getElementsByClassName("responsibility");
var collapseAllButton = document.querySelector(".collapse-all");
const plus = "\u25b6";
const minus = "\u25bc";

// Add click event listener to the collapse all button
collapseAllButton.addEventListener("click", function() {
  // Loop through all responsibility items and collapse them
  for (var i = 0; i < resp.length; i++) {
    var content = resp[i].querySelector(".responsibility-content");
    var isExpanded = content.classList.contains("responsibility-expanded");
    // Set the height of the content based on whether it's expanded or not
    if (isExpanded) {
      content.classList.remove("responsibility-expanded");
      var button = resp[i].querySelector(".expand-button");
      content.style.height = 0 + "px";
      button.textContent = "+";
    }
  }
});

for (var i = 0; i < resp.length; i++) {
  // Get the expand/collapse button for the current responsibility item
  var button = resp[i].querySelector(".expand-button");
  // Add click event listener to the button
  button.addEventListener("click", function() {
    // Get the responsibility content for the current button
    var content = this.nextElementSibling;
    // Check if the content is expanded or not
    var isExpanded = content.classList.contains("responsibility-expanded");
    // Set the height of the content based on whether it's expanded or not
    content.style.height = isExpanded ? 0 : content.scrollHeight + "px";
    // Toggle the "expanded" class for the content after a short delay
    setTimeout(function() {
      content.classList.toggle("responsibility-expanded");
    }, 10);
    // Toggle the text of the button
    if (this.innerHTML === plus) {
      this.innerHTML = minus;
    } else {
      this.innerHTML = plus;
    }
  });
}