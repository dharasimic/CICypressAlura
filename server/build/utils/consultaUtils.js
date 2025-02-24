import { AppError } from '../error/ErrorHandler.js';
var MotivoCancelamento;
(function (MotivoCancelamento) {
    MotivoCancelamento[MotivoCancelamento["paciente_desistiu"] = 0] = "paciente_desistiu";
    MotivoCancelamento[MotivoCancelamento["m\u00E9dico_cancelou"] = 1] = "m\u00E9dico_cancelou";
    MotivoCancelamento[MotivoCancelamento["outros"] = 2] = "outros";
})(MotivoCancelamento || (MotivoCancelamento = {}));
var Lembrete;
(function (Lembrete) {
    Lembrete[Lembrete["email"] = 0] = "email";
    Lembrete[Lembrete["sms"] = 1] = "sms";
})(Lembrete || (Lembrete = {}));
function mapeiaLembretes(lembretes) {
    if (lembretes.length === 0) {
        // throw new AppError('A lista de lembretes não pode ser vazia!')
    }
    return lembretes.map((lembrete) => {
        if (Lembrete[lembrete] === undefined) {
            throw new AppError(`O lembrete ${lembrete} não existe!`);
        }
        return Lembrete[lembrete];
    });
}
function mapeiaMotivoCancelamento(motivos) {
    return motivos.map((motivo) => {
        if (MotivoCancelamento[motivo] === undefined) {
            throw new AppError(`O motivo ${motivo} não existe!`);
        }
        return MotivoCancelamento[motivo];
    });
}
export { MotivoCancelamento, Lembrete, mapeiaMotivoCancelamento, mapeiaLembretes };
