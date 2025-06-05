
document.addEventListener("DOMContentLoaded", function() {
    const AGE_KEY = "isVerified21";
    
    // Check if user has already verified their age
    if (localStorage.getItem(AGE_KEY) {
        return; // Allow access
    }

    // Create modal container
    const modal = document.createElement("div");
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `;

    // Modal content
    modal.innerHTML = `
        <div style="
            background: #fff;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        ">
            <h2 style="color: #333; margin-bottom: 1.5rem;">Age Verification</h2>
            <p style="color: #555; margin-bottom: 2rem;">You must be 21 or older to access this website</p>
            <div style="display: flex; justify-content: center; gap: 1rem;">
                <button id="yesBtn" style="
                    padding: 0.75rem 1.5rem;
                    background: #44804d;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: all 0.3s ease;
                ">I am 21+</button>
                <button id="noBtn" style="
                    padding: 0.75rem 1.5rem;
                    background: #e74c3c;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: all 0.3s ease;
                ">I'm Under 21</button>
            </div>
        </div>
    `;

    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
    document.body.appendChild(modal);

    // Button actions
    document.getElementById("yesBtn").addEventListener("click", function() {
        localStorage.setItem(AGE_KEY, "true");
        document.body.style.overflow = ""; // Restore scrolling
        modal.remove();
    });

    document.getElementById("noBtn").addEventListener("click", function() {
        window.location.href = "https://www.google.com"; // Safe redirect
    });

    // Close modal if clicked outside content
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            window.location.href = "https://www.google.com";
        }
    });
});
