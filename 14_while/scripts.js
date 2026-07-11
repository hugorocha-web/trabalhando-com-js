

var cont=1;
while(cont<=10){
    console.log('contando até 10:',cont)
    cont++;
}


var arr=['hugo', 'paulo', 'daniel']
var y=0;
while(y<3){
    console.log(arr[y])
    y++;
}
var c=1;
var conta=0
while(c<=100){
    console.log(c)
    if (c%2==0){
        conta+=c
    }
    c++;
}
console.log(conta)

var num=3;
var cont=1;

while(cont<=10){
    console.log(num +'x'+ cont + '=', num*cont)
    cont++;
}


var valor=376;


var nota100=Math.trunc(valor/100)
var resto100=Math.trunc(valor%100)
var nota50=Math.trunc(resto100/50)
var resto50=Math.trunc(resto100%50)
var nota20=Math.trunc(resto50/20)
var resto20=Math.trunc(resto50%20)
var nota5=Math.trunc(resto20/5)
var resto5=Math.trunc(resto20%5)
var nota1=Math.trunc(resto5)


console.log(nota100, 'notas de 100')
console.log(nota50, 'notas de 50')
console.log(nota20, 'notas de 20')
console.log(nota5, 'notas de 5')
console.log(nota1, 'notas de 1')