import { Between } from 'typeorm';
import { AppDataSource } from '../data-source.js';
import { Especialista } from '../especialistas/EspecialistaEntity.js';
import { Paciente } from '../pacientes/pacienteEntity.js';
import { Consulta } from './consultaEntity.js';
const horarioInicioDaClinica = 7;
const horarioFechamentoDaClinica = 19;
const validaClinicaEstaAberta = (data) => {
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const dataObj = new Date(data);
    const diaDaSemana = diasDaSemana[dataObj.getUTCDay()];
    const hora = dataObj.getUTCHours();
    return diaDaSemana !== 'Domingo' && hora >= horarioInicioDaClinica && hora < horarioFechamentoDaClinica;
};
// export const validaDuracaoConsulta = async (tempoInicio: Date, tempoFim: Date): Promise<boolean> => {
//   const duracaoConsulta = 60 * 60 * 1000 // 1 HORA DE DURACAO
//   return tempoFim.getTime() - tempoInicio.getTime() === duracaoConsulta
// }
const validaAntecedenciaMinima = (horario, antecedencia_minima) => {
    const agora = new Date();
    const horarioDaConsulta = new Date(horario);
    agora.setMinutes(agora.getMinutes() - antecedencia_minima);
    return horarioDaConsulta > agora;
};
const estaAtivoPaciente = async (pacienteId) => {
    var _a;
    const paciente = await AppDataSource.manager.findOneBy(Paciente, {
        id: pacienteId
    });
    return (_a = paciente === null || paciente === void 0 ? void 0 : paciente.estaAtivo) !== null && _a !== void 0 ? _a : false;
};
const estaAtivoEspecialista = async (especialistaId) => {
    var _a;
    const paciente = await AppDataSource.manager.findOneBy(Especialista, {
        id: especialistaId
    });
    return (_a = paciente === null || paciente === void 0 ? void 0 : paciente.estaAtivo) !== null && _a !== void 0 ? _a : false;
};
const pacienteEstaDisponivel = async (pacienteId, tempoDaData) => {
    const dataObj = new Date(tempoDaData);
    const consultations = await AppDataSource.manager.find(Consulta, {
        where: {
            paciente: { id: pacienteId },
            data: Between(new Date(dataObj.getFullYear(), dataObj.getMonth(), dataObj.getDate(), 0, 0, 0), new Date(dataObj.getFullYear(), dataObj.getMonth(), dataObj.getDate(), 23, 59, 59))
        }
    });
    return consultations.length === 0;
};
const especialistaEstaDisponivel = async (especialistaId, tempoDaData) => {
    const dataObj = new Date(tempoDaData);
    const consultations = await AppDataSource.manager.find(Consulta, {
        where: {
            especialista: { id: especialistaId },
            data: Between(new Date(dataObj.getFullYear(), dataObj.getMonth(), dataObj.getDate(), 0, 0, 0), new Date(dataObj.getFullYear(), dataObj.getMonth(), dataObj.getDate(), 23, 59, 59))
        }
    });
    return consultations.length === 0;
};
export { validaClinicaEstaAberta, validaAntecedenciaMinima, estaAtivoPaciente, estaAtivoEspecialista, pacienteEstaDisponivel, especialistaEstaDisponivel };
