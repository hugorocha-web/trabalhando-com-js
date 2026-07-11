let frutas=['maça', 'banana', 'pera'];


//push (append em python)


frutas.push('morango');
console.log(frutas);


//pop

frutas.pop();

console.log(frutas);



//unshift (adiciona no inicio da lista)

frutas.unshift('abacate');

console.log(frutas);
//shift(remove o primeiro objeto

frutas.shift();

console.log(frutas);

//acessar o ultimo elemento de uma lista

console.log(frutas[frutas.length-1]);

//splice (insert em python e tem como remover algo com ele tbm

let nomes=['hugo', 'paulo', 'andre', 'diego'];


nomes.splice(1, 0 ,'julio');

console.log(nomes);

//join(trasforma tudo em string)

let tudo = nomes.join(", ");

console.log(tudo);

//reverse (ele mostra a lista de forma reversa)


console.log(nomes.reverse())
