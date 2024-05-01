// Define a variável com o link
var linkUrl = "https://www.example.com";

// Cria um novo elemento de link (a)
var linkElement = document.createElement('a');

// Define o href do link e o texto
linkElement.href = linkUrl;
linkElement.textContent = "Visite nosso site";

// Escolhe um elemento existente para adicionar o link
// Por exemplo, um elemento com o ID 'link-container'
var container = document.getElementById('link-container');
container.appendChild(linkElement);
