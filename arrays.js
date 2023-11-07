//Lista de Hobbies
const hobbies = ['Jogar', 'Maratonar séries', 'Ler livros'];
const hobbiesDoAmigo = ['Jogar', 'Academia', 'Filmes']
const todosOsHobbies = hobbies.concat(hobbiesDoAmigo);
const hobbiesMusicais = ['Cantar', 'Tocar violão', 'Escutar música'];
const hobbiesEsportivos = ['Correr', 'Academia', 'Futebol'];
const hobbiesCriativos = ['Desenhar', 'Esculturas', 'Poesia']
const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos, hobbiesCriativos];

console.log("Lista de hobbies da Mayara:");
console.log(hobbies); //Mostrar Lista de Hobbies
console.log("---------------------------------------------------------------");

console.log("Listando hobbies separadamente:");
console.log(" ");
console.log(hobbies[0]); //Mostrar 1° hobbie da lista
console.log(hobbies[1]); //Mostrar 2° hobbie da lista
console.log(hobbies[2]); //Mostrar 3° hobbie da lista
console.log("---------------------------------------------------------------");

console.log("Substituindo o Hobbie 'Jogar' por 'Dançar':");
hobbies[0] = 'Dançar'; 
console.log(hobbies);
console.log("---------------------------------------------------------------");

console.log("Numero total de Hobbies:");
console.log(hobbies.length);
console.log("---------------------------------------------------------------");

console.log("Adicionando o Hobbie de Cozinhar:");
hobbies.push('Cozinhar');
console.log(hobbies);
console.log("---------------------------------------------------------------");

console.log("Removendo o último item da lista de hobbies:");
hobbies.pop();
console.log(hobbies);
console.log("---------------------------------------------------------------");

console.log("Descobrindo a posição de um item:");
let posicao = hobbies.indexOf('Dançar');
console.log(posicao);
console.log("---------------------------------------------------------------");

console.log("Removendo item da lista:");
hobbies.splice(0,1);
console.log(hobbies);
console.log("---------------------------------------------------------------");

console.log("Lista com meus hobbies + hobbies do meu amigo:");
console.log(todosOsHobbies);
console.log("---------------------------------------------------------------");

console.log("Mostrando o primeiro item de um array aninhado:");
console.log(categoriasDeHobbies[0]);
console.log("---------------------------------------------------------------");

console.log("Acessando o terceiro item do primeiro array:");
console.log(categoriasDeHobbies[0][2]);