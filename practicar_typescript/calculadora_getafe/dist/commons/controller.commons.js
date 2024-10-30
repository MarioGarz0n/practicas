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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const common_1 = require("@nestjs/common");
class BaseController {
    async findAll() {
        return await this.getService().findAll();
    }
    async find(dorsal) {
        return await this.getService().findOne(dorsal);
    }
    async findNomAp(nombre, apellido) {
        return await this.getService().findByNombreApellido(nombre, apellido);
    }
    async count() {
        return await this.getService().count();
    }
    calculadora(dors1, dors2, op) {
        return this.getService().calculadora(dors1, dors2, op);
    }
    calcNom(nom1, ap1, op, nom2, ap2) {
        return this.getService().calculadoraNombre(nom1, ap1, op, nom2, ap2);
    }
}
exports.BaseController = BaseController;
__decorate([
    (0, common_1.Get)('plantilla'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('buscar/:dorsal'),
    __param(0, (0, common_1.Param)('dorsal')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('buscarNombre/:nombre/:apellidos'),
    __param(0, (0, common_1.Param)('nombre')),
    __param(1, (0, common_1.Param)('apellidos')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findNomAp", null);
__decorate([
    (0, common_1.Get)('numJugadores'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "count", null);
__decorate([
    (0, common_1.Get)('calculadora/:dors1/:dors2/:operador'),
    __param(0, (0, common_1.Param)('dors1')),
    __param(1, (0, common_1.Param)('dors2')),
    __param(2, (0, common_1.Param)('operador')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "calculadora", null);
__decorate([
    (0, common_1.Get)('calcNom/:nom1/:ap1/:op/:nom2/:ap2'),
    __param(0, (0, common_1.Param)('nom1')),
    __param(1, (0, common_1.Param)('ap1')),
    __param(2, (0, common_1.Param)('op')),
    __param(3, (0, common_1.Param)('nom2')),
    __param(4, (0, common_1.Param)('ap2')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "calcNom", null);
//# sourceMappingURL=controller.commons.js.map