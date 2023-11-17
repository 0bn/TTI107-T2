function soma1aN (n){
    return new Promise (function(resolve, reject){
        let s = 0;
        for(let i=1; i<=n; i++){
            s = s + i;
        }
        resolve(s)
    })
}

soma1aN(100)
    .then((res) => {
        console.log(res)
    })

function soma1aNgauss (n){
    return Promise.resolve(n * (n+1) / 2)
}

console.log('2 -------------')
soma1aNgauss(1000)
    .then(res => console.log(res))

function somaComErro (n){
    if (n<0) return Promise.reject('calculo inválido para valores negativos')
    else return Promise.resolve(n * (n+1) / 2)
}