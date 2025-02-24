var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Especialista } from '../especialistas/EspecialistaEntity.js';
import { Paciente } from '../pacientes/pacienteEntity.js';
var Lembrete;
(function (Lembrete) {
    Lembrete[Lembrete["email"] = 0] = "email";
    Lembrete[Lembrete["sms"] = 1] = "sms";
})(Lembrete || (Lembrete = {}));
var MotivoCancelamento;
(function (MotivoCancelamento) {
    MotivoCancelamento[MotivoCancelamento["paciente_desistiu"] = 0] = "paciente_desistiu";
    MotivoCancelamento[MotivoCancelamento["m\u00E9dico_cancelou"] = 1] = "m\u00E9dico_cancelou";
    MotivoCancelamento[MotivoCancelamento["outros"] = 2] = "outros";
})(MotivoCancelamento || (MotivoCancelamento = {}));
let Consulta = class Consulta {
    cancelar(motivo) {
        this.motivoCancelamento = motivo;
    }
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Consulta.prototype, "id", void 0);
__decorate([
    ManyToOne(() => Especialista, { eager: true })
    // @JoinColumn({ name: 'especialista_id' })
    ,
    __metadata("design:type", Especialista)
], Consulta.prototype, "especialista", void 0);
__decorate([
    ManyToOne(() => Paciente, { eager: true })
    // @JoinColumn({ name: 'paciente_id' })
    ,
    __metadata("design:type", Paciente)
], Consulta.prototype, "paciente", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Consulta.prototype, "data", void 0);
__decorate([
    Column({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Consulta.prototype, "desejaLembrete", void 0);
__decorate([
    Column({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], Consulta.prototype, "lembretes", void 0);
__decorate([
    Column({ name: 'motivo_cancelamento', nullable: true }),
    __metadata("design:type", String)
], Consulta.prototype, "motivoCancelamento", void 0);
Consulta = __decorate([
    Entity()
], Consulta);
export { Consulta };
