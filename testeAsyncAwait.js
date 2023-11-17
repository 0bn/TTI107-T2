async function hello(nome){
    return "hello, " + nome;
}

const resultado = hello("Andreia")
console.log(resultado)

resultado
    .then(res => console.log(res));

function fatorial(n){
    if (n<0) return Promise.reject('Numero deve ser maior que 0')
    let f = 1;
    for (let i=2; i<=n; i++){
        f *= i;
    }
    return Promise.resolve(f);
}

function chamaComThenCatch(){
    fatorial(5)
        .then(res => console.log('fatorial de 5 = ' + res))
        .catch(res => console.log(res))
    fatorial(-5)
        .then(res => console.log('fatorial de -5 = ' + res))
        .catch(res => console.log(res))
}
chamaComThenCatch();

async function chamaComAwait() {
    const f6 = await fatorial(6);
    console.log('fatorial de 6 = ' + f6)

    // const fx = await fatorial(-1)
    // console.log('fatorial de -1' + fx);
    //chamas de Promises reject  devem ser manipuladas pela função .catch()

}
chamaComAwait()