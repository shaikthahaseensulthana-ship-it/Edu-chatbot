function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase();
    if (message === "") return;

    addMessage("user", input.value);
    input.value = "";

    let reply = getBotReply(message);
    setTimeout(() => {
        addMessage("bot", reply);
    }, 600);
}

function addMessage(sender, text) {
    let chatBox = document.getElementById("chat-box");
    let div = document.createElement("div");
    div.className = sender;
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(msg) {
    if (msg.includes("java"))
        return "Java is an object-oriented programming language used for web, mobile, and enterprise applications.";

    if (msg.includes("python"))
        return "Python is a high-level language used in AI, Data Science, Web Development, and Automation.";

    if (msg.includes("c++"))
        return "C++ is a powerful programming language used in game development, system software, and competitive programming.";

    if (msg.includes("c language"))
        return "C is a procedural programming language used for operating systems and embedded systems.";

    if (msg.includes("html"))
        return "HTML is used to structure web pages.";

    if (msg.includes("css"))
        return "CSS is used to style and design web pages.";

    if (msg.includes("javascript"))
        return "JavaScript adds interactivity to websites.";

    if (msg.includes("react"))
        return "React is a JavaScript library used to build fast user interfaces.";

    if (msg.includes("oracle"))
        return "Oracle is a relational database management system.";

    if (msg.includes("mongodb"))
        return "MongoDB is a NoSQL database used for large-scale applications.";

    if (msg.includes("cyber"))
        return "Cybersecurity protects systems and networks from digital attacks.";

    if (msg.includes("ai") || msg.includes("artificial intelligence"))
        return "Artificial Intelligence enables machines to think and learn like humans.";

    if (msg.includes("iot"))
        return "Internet of Things connects physical devices to the internet.";

    if (msg.includes("blockchain"))
        return "Blockchain is a secure distributed ledger technology.";

    return "I can help you with Java, Python, Web, AI, Cybersecurity, IoT, Blockchain and more 😊";
}
