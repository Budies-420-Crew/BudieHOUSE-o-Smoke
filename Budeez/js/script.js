
function subscribe() {
    var email = document.getElementById('subscribe-email').value;
    alert('Thank you for subscribing: ' + email);
}

window.Jupiter.init({
displayMode: "widget",
endpoint: "https://api.mainnet-beta.solana.com",
});
