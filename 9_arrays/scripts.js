var arr=['hugo', 'marcos', 'julio', 'paulo',{nome:'cesar'}];
console.log(arr);
arr[5]='lazaro';
console.log(arr);

console.log(arr[4].nome);
for(nome in arr){
    console.log(arr[nome]);
};
for(i in arr){
    console.log(i);
};

/*
eles são como listas em python com [] colchetes
 */

/*
para adicionar no array precisa colocar o indice que quer adicionar
 */