
let header = document.querySelector('header');
let h1 = document.createElement('h1');
let texto = document.createTextNode("O íncrivel Mundo de Gumball");
let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');
let imagem1 = document.createAttribute('src');
let imagem2 = document.createAttribute('src');
let imagem3 = document.createAttribute('src');
imagem1.value = "./oincrivel.png";
img1.setAttributeNode(imagem1);
imagem2.value = "https://media1.giphy.com/media/jpuJkyuJUEHNc62H0L/200w.webp?cid=ecf05e47v13imtj25wfenda3p5mr7mkgcjo4nu90wwc8p750&rid=200w.webp";
img2.setAttributeNode(imagem2);
imagem3.value = "https://media4.giphy.com/media/L0C3eo0XgklO7iqXRC/200w.webp?cid=ecf05e47v13imtj25wfenda3p5mr7mkgcjo4nu90wwc8p750&rid=200w.webp";
img3.setAttributeNode(imagem3);

let main = document.querySelector('main');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let h21 = document.createElement('h2');
let h22 = document.createElement('h2');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let tituloh21 = document.createTextNode("Enredo");
let tituloh22 = document.createTextNode("Personagens Principais");
let textop1 = document.createTextNode("A série gira em torno da vida de um híbrido de gato e coelho de 12 anos de idade chamado Gumball Watterson e o seu cotidiano na cidade fictícia de Elmore, nos Estados Unidos, junto com seu irmão peixinho / melhor amigo chamado Darwin Watterson. Os outros membros da família de Gumball são a sua irmã mais nova e intelectual chamada Anais Watterson, uma coelha rosa, sua mãe trabalhadora Nicole Watterson, uma gata azul, e seu pai Ricardo Watterson, um coelho rosa. Gumball e Darwin geralmente se vêem envolvidos em inúmeras situações constrangedoras e engraçadas. Gumball frequenta o ginásio na Elmore High School com seus irmãos e interage ao mesmo tempo com seus colegas de escola e também com os habitantes de Elmore, cidade fictícia nos Estados Unidos, onde tudo pode acontecer: desde simples ocasiões até catástrofes mundiais.");
let textop2 = document.createTextNode("Os personagens principais são: Gumball Trisha Watterson, Darwin Watterson III (irmão de Gumball), Anais Watterson(irmã de Gumball e Darwin), Nicole Senicourt Watterson(mãe de Gumball, Anais e Darwin) e Richard Buckley Watterson(pai de Gumball, Anais e Darwin).");


header.appendChild(h1);
h1.appendChild(img2);
h1.appendChild(texto);
h1.appendChild(img3);
main.appendChild(div1);
main.appendChild(div2);
div1.appendChild(h21);
div2.appendChild(h22);
h21.appendChild(tituloh21);
h22.appendChild(tituloh22);
div1.appendChild(p1);
div2.appendChild(p2);
p1.appendChild(textop1);
p2.appendChild(textop2);
main.appendChild(img1);

img1.classList.add("family");






