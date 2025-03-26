document.addEventListener("DOMContentLoaded", function () {
    const AGE_KEY = "isVerified21";
    
    // Check if user has already verified their age
    if (localStorage.getItem(AGE_KEY) === "true") {
        return; // Allow access
    }

    // Create a modal popup
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.9)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.flexDirection = "column";
    modal.style.zIndex = "10000";

    modal.innerHTML = `
        <div style="background: #fff; padding: 20px; border-radius: 10px; text-align: center; max-width: 400px;">
            <h2 style="color: black;">Are you 21 or older?</h2>
            <button id="yesBtn" style="margin: 10px; padding: 10px 20px; background: green; color: white; border: none; cursor: pointer;">Yes</button>
            <button id="noBtn" style="margin: 10px; padding: 10px 20px; background: red; color: white; border: none; cursor: pointer;">No</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Button actions
    document.getElementById("yesBtn").addEventListener("click", function () {
        localStorage.setItem(AGE_KEY, "true"); // Save choice
        modal.remove(); // Close popup
    });

    document.getElementById("noBtn").addEventListener("click", function () {
        window.location.href = "https://www.google.com"; // Redirect to another site
    });
});
