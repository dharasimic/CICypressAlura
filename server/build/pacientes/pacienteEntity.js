var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Endereco } from '../enderecos/enderecoEntity.js';
import { Avaliacoes } from '../avaliacoes/avaliacoesEntity.js';
import { Role } from '../auth/roles.js';
let Paciente = class Paciente {
    constructor(cpf, nome, email, senha, telefone, planosSaude, estaAtivo, imagem, historico) {
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.estaAtivo = estaAtivo;
        this.senha = senha;
        this.telefone = telefone;
        this.planosSaude = planosSaude;
        this.imagem = imagem;
        this.historico = historico;
        this.role = Role.paciente;
    }
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Paciente.prototype, "id", void 0);
__decorate([
    Column('varchar', { length: 11 }),
    __metadata("design:type", String)
], Paciente.prototype, "cpf", void 0);
__decorate([
    Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], Paciente.prototype, "nome", void 0);
__decorate([
    Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], Paciente.prototype, "email", void 0);
__decorate([
    Column('varchar', { length: 100, select: false }),
    __metadata("design:type", String)
], Paciente.prototype, "senha", void 0);
__decorate([
    OneToOne(() => Endereco, {
        cascade: ['update']
    }),
    JoinColumn({ referencedColumnName: 'id' }),
    __metadata("design:type", Object)
], Paciente.prototype, "endereco", void 0);
__decorate([
    Column({ type: 'int' }),
    __metadata("design:type", Number)
], Paciente.prototype, "telefone", void 0);
__decorate([
    Column({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Paciente.prototype, "estaAtivo", void 0);
__decorate([
    Column({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Paciente.prototype, "possuiPlanoSaude", void 0);
__decorate([
    Column({ type: 'simple-array', nullable: true }),
    __metadata("design:type", String)
], Paciente.prototype, "planosSaude", void 0);
__decorate([
    Column({ type: 'simple-array', nullable: true }),
    __metadata("design:type", String)
], Paciente.prototype, "historico", void 0);
__decorate([
    Column('varchar', { nullable: true }),
    __metadata("design:type", String)
], Paciente.prototype, "imagem", void 0);
__decorate([
    Column('varchar', { nullable: false }),
    __metadata("design:type", String)
], Paciente.prototype, "role", void 0);
__decorate([
    OneToMany(() => Avaliacoes, (avaliacoes) => avaliacoes.paciente),
    __metadata("design:type", Object)
], Paciente.prototype, "avaliacoes", void 0);
Paciente = __decorate([
    Entity(),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])
], Paciente);
export { Paciente };
