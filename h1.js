document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("00000000-0000-0000-0000-000000000000_0a8c9e6e-65db-ab91-63f3-0db28ea4686c_ToolbarButton");

    // Create dropdown menu
    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content";
    dropdownContent.innerHTML = `
        <a href="#" id="option1">Option 1</a>
        <a href="#" id="option2">Option 2</a>
        <a href="#" id="option3">Option 3</a>
    `;

    // Append dropdown to the button's parent element
    button.parentElement.appendChild(dropdownContent);

    // Add event listeners to dropdown options
    document.getElementById("option1").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "https://www.example.com";
    });

    document.getElementById("option2").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "https://www.example2.com";
    });

    document.getElementById("option3").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "https://www.example3.com";
    });
});
