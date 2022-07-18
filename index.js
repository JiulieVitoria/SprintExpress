import prompt from 'prompt-sync';


function ordenar() {

    const prompt = prompt();

    let arr = [];
    let solicitarPropriedade = propriedade("Digite a propriedade do CSS.");

    while (true) {
    if ("sair") {
        arr.push(solicitarPropriedade);
        solicitarPropriedade = Propriedade("Digite a propriedade CSS.");
    } 
    else {
        console.log(arr.sort());
        break;

}
    }
}
 


ordenar();