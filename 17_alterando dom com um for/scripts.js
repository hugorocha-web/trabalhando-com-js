var lista = ['maça', 'banana', 'pera', 'jáca', 'morango', 'laranja'];

var listaUL = document.createElement('ul');

var body = document.getElementsByTagName('body');

//console.log(body[0]);

body[0].appendChild(listaUL);

var listanobody = document.getElementsByTagName('ul')

console.log(listanobody[0])

for( var i=0; i<lista.length; i++){

    var lifor=document.createElement('li')


    var textoli=document.createTextNode(lista[i])

    lifor.appendChild(textoli)

    listanobody[0].appendChild(lifor)

    console.log(lifor)
}