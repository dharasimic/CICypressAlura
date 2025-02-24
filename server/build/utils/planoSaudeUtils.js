import { AppError } from '../error/ErrorHandler.js';
var PlanosSaude;
(function (PlanosSaude) {
    PlanosSaude[PlanosSaude["Sulamerica"] = 0] = "Sulamerica";
    PlanosSaude[PlanosSaude["Unimed"] = 1] = "Unimed";
    PlanosSaude[PlanosSaude["Bradesco"] = 2] = "Bradesco";
    PlanosSaude[PlanosSaude["Amil"] = 3] = "Amil";
    PlanosSaude[PlanosSaude["Biosaude"] = 4] = "Biosaude";
    PlanosSaude[PlanosSaude["Biovida"] = 5] = "Biovida";
    PlanosSaude[PlanosSaude["Outro"] = 6] = "Outro";
})(PlanosSaude || (PlanosSaude = {}));
function mapeiaPlano(planosSaude) {
    if (planosSaude.length === 0) {
        throw new AppError('A lista de planos de saúde não pode ser vazia!');
    }
    return planosSaude.map((plano) => {
        if (PlanosSaude[plano] === undefined) {
            throw new AppError(`O plano ${plano} não existe!`);
        }
        return PlanosSaude[plano];
    });
}
export { PlanosSaude, mapeiaPlano };
