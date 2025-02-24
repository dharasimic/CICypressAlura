var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Endereco } from '../enderecos/enderecoEntity.js';
import { Especialista } from '../especialistas/EspecialistaEntity.js';
import { Role } from '../auth/roles.js';
let Clinica = class Clinica {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Clinica.prototype, "id", void 0);
__decorate([
    OneToOne(() => Endereco, {
        cascade: ['update']
    }),
    Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], Clinica.prototype, "nome", void 0);
__decorate([
    JoinColumn({ referencedColumnName: 'id' }),
    __metadata("design:type", Object)
], Clinica.prototype, "endereco", void 0);
__decorate([
    OneToMany(() => Especialista, (especialista) => especialista.clinica),
    __metadata("design:type", Object)
], Clinica.prototype, "especialistas", void 0);
__decorate([
    Column({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], Clinica.prototype, "planoDeSaudeAceitos", void 0);
__decorate([
    Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], Clinica.prototype, "email", void 0);
__decorate([
    Column('varchar', { length: 100, select: false }),
    __metadata("design:type", String)
], Clinica.prototype, "senha", void 0);
__decorate([
    Column('varchar', { nullable: false, default: Role.clinica }),
    __metadata("design:type", String)
], Clinica.prototype, "role", void 0);
Clinica = __decorate([
    Entity()
], Clinica);
export { Clinica };
