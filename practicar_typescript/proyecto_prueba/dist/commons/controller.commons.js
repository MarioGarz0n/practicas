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
    async findOne(id) {
        return await this.getService().findOne(id);
    }
    async save(entity) {
        return await this.getService().save(entity);
    }
    async saveMany(entities) {
        return await this.getService().saveMany(entities);
    }
    async delete(id) {
        return this.getService().delete(id);
    }
    async count() {
        return await this.getService().count();
    }
    suma(num1, num2, op) {
        return this.getService().calculadora(num1, num2, op);
    }
}
exports.BaseController = BaseController;
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('save'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "save", null);
__decorate([
    (0, common_1.Post)('save/many'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "saveMany", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "count", null);
__decorate([
    (0, common_1.Get)('calculadora/:num1/:num2/:operador'),
    __param(0, (0, common_1.Param)('num1')),
    __param(1, (0, common_1.Param)('num2')),
    __param(2, (0, common_1.Param)('operador')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Object)
], BaseController.prototype, "suma", null);
//# sourceMappingURL=controller.commons.js.map