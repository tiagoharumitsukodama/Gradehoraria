
function alimetar( reqBody, TodasTurmas ){

    let _nomeComponente = reqBody.nomeComponente;
    let _nomeTurma;
    let _quantidadeTurma;
    
    for (let indiceTurma in reqBody.nomeTurma) {

        _nomeTurma =  reqBody.nomeTurma[indiceTurma];
        _quantidadeTurma = reqBody.quantidadeAulasTurma[indiceTurma];

        if (!Array.isArray(TodasTurmas[_nomeTurma]))
            TodasTurmas[_nomeTurma] = [];

        TodasTurmas[_nomeTurma].push({
            nomeTurma: _nomeTurma,
            nomeComponente: _nomeComponente,
            quantidadeAulasTurma: _quantidadeTurma,                        
        });
    }
}

module.exports = {alimetar}