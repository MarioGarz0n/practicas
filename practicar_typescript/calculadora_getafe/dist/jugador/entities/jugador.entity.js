"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Jugador = class Jugador {
    static _OPENAPI_METADATA_FACTORY() {
        return { dorsal: { required: true, type: () => Number }, nombre: { required: true, type: () => String }, apellidos: { required: true, type: () => String } };
    }
};
exports.Jugador = Jugador;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Jugador.prototype, "dorsal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jugador.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jugador.prototype, "apellidos", void 0);
exports.Jugador = Jugador = __decorate([
    (0, typeorm_1.Entity)()
], Jugador);
//# sourceMappingURL=jugador.entity.js.map