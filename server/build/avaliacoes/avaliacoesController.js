import { AppDataSource } from '../data-source.js';
import { Avaliacoes } from './avaliacoesEntity.js';
import { Paciente } from '../pacientes/pacienteEntity.js';
import { Especialista } from '../especialistas/EspecialistaEntity.js';
import { AppError, Status } from '../error/ErrorHandler.js';
export const listaAvaliacoes = async (req, res) => {
    const allAvaliacoes = await AppDataSource.manager.find(Avaliacoes);
    res.json(allAvaliacoes);
};
// Post
// fazer o get pegar os dados e no post só ids e nota
export const criaAvaliacao = async (req, res) => {
    const { idEspecialista, idPaciente, descricao, nota } = req.body;
    const especialista = await AppDataSource.manager.findOneBy(Especialista, {
        id: idEspecialista
    });
    const paciente = await AppDataSource.manager.findOneBy(Paciente, {
        id: idPaciente
    });
    const avaliacao = new Avaliacoes();
    if ((especialista == null) || (paciente == null)) {
        throw new AppError('Especialista ou Paciente não encontrado', Status.NOT_FOUND);
    }
    avaliacao.especialista = especialista;
    avaliacao.paciente = paciente;
    avaliacao.nota = nota;
    avaliacao.descricao = descricao;
    await AppDataSource.manager.save(avaliacao);
    res.json({ id: avaliacao.id, nota: avaliacao.nota, descricao: avaliacao.descricao });
};
