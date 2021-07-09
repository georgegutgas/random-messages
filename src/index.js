const messages = [
    "Oscar",
    "George",
    "Maria",
    "Estrella",
    "Carolina",
    "Fernanda",
    "Angela",
    "Lucia"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*
        messages.length)];
        console.log(message);
};

module.exports = { randomMsg };