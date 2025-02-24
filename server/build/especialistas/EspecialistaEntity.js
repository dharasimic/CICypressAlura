var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Avaliacoes } from "../avaliacoes/avaliacoesEntity.js";
import { Clinica } from "../clinicas/clinicaEntity.js";
import { Endereco } from "../enderecos/enderecoEntity.js";
import { Role } from "../auth/roles.js";
let Especialista = class Especialista {
    constructor(nome, crm, imagem, estaAtivo, especialidade, email, telefone, possuiPlanoSaude, planosSaude, senha) {
        this.nome = nome;
        this.crm = crm;
        this.imagem = imagem;
        this.estaAtivo = estaAtivo;
        this.especialidade = especialidade;
        this.email = email;
        this.telefone = telefone;
        this.possuiPlanoSaude = possuiPlanoSaude;
        this.planosSaude = planosSaude;
        this.senha = senha;
        this.role = Role.especialista;
    }
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Especialista.prototype, "id", void 0);
__decorate([
    Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], Especialista.prototype, "nome", void 0);
__decorate([
    Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], Especialista.prototype, "crm", void 0);
__decorate([
    Column("varchar"),
    __metadata("design:type", String)
], Especialista.prototype, "imagem", void 0);
__decorate([
    Column({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], Especialista.prototype, "estaAtivo", void 0);
__decorate([
    Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], Especialista.prototype, "especialidade", void 0);
__decorate([
    Column("varchar", { length: 100, nullable: true }),
    __metadata("design:type", String)
], Especialista.prototype, "email", void 0);
__decorate([
    Column("varchar", { length: 100, select: false }),
    __metadata("design:type", String)
], Especialista.prototype, "senha", void 0);
__decorate([
    Column("varchar", { nullable: true }),
    __metadata("design:type", String)
], Especialista.prototype, "telefone", void 0);
__decorate([
    ManyToOne(() => Clinica, (clinica) => clinica.especialistas),
    __metadata("design:type", Object)
], Especialista.prototype, "clinica", void 0);
__decorate([
    OneToMany(() => Avaliacoes, (avaliacoes) => avaliacoes.especialista, {
        eager: true,
    }),
    __metadata("design:type", Object)
], Especialista.prototype, "avaliacoes", void 0);
__decorate([
    Column({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], Especialista.prototype, "possuiPlanoSaude", void 0);
__decorate([
    Column({ type: "simple-array", nullable: true }),
    __metadata("design:type", String)
], Especialista.prototype, "planosSaude", void 0);
__decorate([
    OneToOne(() => Endereco, {
        cascade: ["update"],
    }),
    JoinColumn({ referencedColumnName: "id" }),
    __metadata("design:type", Object)
], Especialista.prototype, "endereco", void 0);
__decorate([
    Column("varchar", { nullable: false }),
    __metadata("design:type", String)
], Especialista.prototype, "role", void 0);
Especialista = __decorate([
    Entity(),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object])
], Especialista);
export { Especialista };
