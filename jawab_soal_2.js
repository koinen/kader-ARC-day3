// // console.log("Hello, world!")

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function getUserInput(prompt) {
    return new Promise((resolve) => {
        readline.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}

async function processGetOp(array, callback){
    const Operator = await getUserInput('Ditambah (+)/ Dikali (*)?: ');
    if (Operator != '+' && Operator != '*'){
        return 0;
    }
    return callback(array, Operator); 
}

function handle(array, Operator){
    let res = 0;
    if(Operator == '+'){
        for(let i = 0; i < array.length; i++){
            res += array[i];
        }
    }
    else{
        res = 1;
        for(let i = 0; i < array.length; i++){
            res *= array[i];
        }
    }
    return res;
}

async function cetak(array){
    const resultFinal = await processGetOp(array, handle);
    console.log(resultFinal);
    process.exit(0);
}

async function main(){ 
    const n =  await getUserInput('Masukkan panjang array: ');
    const array1 = [];
    for(let i = 0;i<n;i++){
        const ina = await getUserInput('Masukkan bilangan isi array: ');
        const integerEquivalent = parseInt(ina, 10);
        array1.push(integerEquivalent);
    }
    cetak(array1);
    return 0;
}

main();


