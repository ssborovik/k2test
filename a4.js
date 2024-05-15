document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("8c4a773b-3533-2136-707a-220681e9c3e8_0a8c9e6e-65db-ab91-63f3-0db28ea4686c_ToolbarButton");

    // Create dropdown menu
    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content";
    dropdownContent.innerHTML = `
        <div class="nested-option">
            <a href="#" id="option1">Option 1</a>
            <div class="nested-dropdown">
                <a href="#" id="nested-option1">Nested Option 1</a>
                <a href="#" id="nested-option2">Nested Option 2</a>
            </div>
        </div>
        <a href="#" id="option2">Option 2</a>
        <a href="#" id="option3">Option 3</a>
    `;

    // Append dropdown to the button's parent element
    button.parentElement.appendChild(dropdownContent);

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

    // Add event listeners to main dropdown options
    document.getElementById("option1").addEventListener("click", function(event) {
        event.preventDefault();
    });

    document.getElementById("option2").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "https://www.example2.com";
    });

    document.getElementById("option3").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "https://www.example3.com";
    });

    // Add event listeners to nested dropdown options
    document.getElementById("nested-option1").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "https://www.nestedexample1.com";
    });

    document.getElementById("nested-option2").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "https://www.nestedexample2.com";
    });
});
