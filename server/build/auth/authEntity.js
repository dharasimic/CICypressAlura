var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Role } from './roles.js';
import { ViewColumn, ViewEntity } from 'typeorm';
let Autenticaveis = class Autenticaveis {
};
__decorate([
    ViewColumn(),
    __metadata("design:type", String)
], Autenticaveis.prototype, "id", void 0);
__decorate([
    ViewColumn(),
    __metadata("design:type", String)
], Autenticaveis.prototype, "email", void 0);
__decorate([
    ViewColumn(),
    __metadata("design:type", String)
], Autenticaveis.prototype, "senha", void 0);
__decorate([
    ViewColumn(),
    __metadata("design:type", String)
], Autenticaveis.prototype, "rota", void 0);
__decorate([
    ViewColumn(),
    __metadata("design:type", String)
], Autenticaveis.prototype, "role", void 0);
Autenticaveis = __decorate([
    ViewEntity({
        expression: `
    SELECT "email", "senha", "role", "id", '/paciente' AS "rota" FROM "paciente"
    UNION ALL
    SELECT "email", "senha", "role", "id", '/especialista' AS "rota" FROM "especialista"
    UNION ALL
    SELECT "email", "senha", "role", "id", '/clinica' AS "rota" FROM "clinica"
  `
    })
], Autenticaveis);
export { Autenticaveis };
