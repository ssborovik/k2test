document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("8c4a773b-3533-2136-707a-220681e9c3e8_0a8c9e6e-65db-ab91-63f3-0db28ea4686c_ToolbarButton");

    // Create dropdown menu
    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content";
    dropdownContent.innerHTML = `
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
    `;

    // Append dropdown to the body
    document.body.appendChild(dropdownContent);

    button.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        
        // Toggle dropdown visibility
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";

        // Position the dropdown below the button
        const rect = button.getBoundingClientRect();
        dropdownContent.style.top = `${rect.bottom}px`;
        dropdownContent.style.left = `${rect.left}px`;
        dropdownContent.style.width = `${rect.width}px`;
    });

    window.addEventListener("click", function(event) {
        if (!button.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });
});
