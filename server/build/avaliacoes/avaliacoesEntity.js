var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Paciente } from '../pacientes/pacienteEntity.js';
import { Especialista } from '../especialistas/EspecialistaEntity.js';
let Avaliacoes = class Avaliacoes {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Avaliacoes.prototype, "id", void 0);
__decorate([
    CreateDateColumn({
        type: 'text'
    }),
    __metadata("design:type", Date // Gerar automaticamente e puxar no GET o horário no CRUD
    )
], Avaliacoes.prototype, "createdAt", void 0);
__decorate([
    ManyToOne(() => Especialista, (especialista) => especialista.avaliacoes),
    __metadata("design:type", Object)
], Avaliacoes.prototype, "especialista", void 0);
__decorate([
    ManyToOne(() => Paciente, (paciente) => paciente.avaliacoes),
    __metadata("design:type", Object)
], Avaliacoes.prototype, "paciente", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Avaliacoes.prototype, "nota", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], Avaliacoes.prototype, "descricao", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], Avaliacoes.prototype, "especialistaId", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", Number)
], Avaliacoes.prototype, "pacienteId", void 0);
Avaliacoes = __decorate([
    Entity()
], Avaliacoes);
export { Avaliacoes };
