const planosSaude = {
    nenhum: 'NENHUM',
    sulamerica: 'SULAMERICA',
    unimed: 'UNIMED',
    bradesco: 'BRADESCO',
    amil: 'AMIL',
    biosaude: 'BIOSAUDE',
    biovida: 'BIOVIDA',
    outro: 'OUTRO'
};
export const planosDeSaudeGet = async (req, res) => {
    res.json(planosSaude);
};
