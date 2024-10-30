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
exports.JugadorController = void 0;
const controller_commons_1 = require("../../commons/controller.commons");
const common_1 = require("@nestjs/common");
const jugador_service_1 = require("../service/jugador.service");
let JugadorController = class JugadorController extends controller_commons_1.BaseController {
    constructor(jugadorService) {
        super();
        this.jugadorService = jugadorService;
    }
    getService() {
        return this.jugadorService;
    }
};
exports.JugadorController = JugadorController;
exports.JugadorController = JugadorController = __decorate([
    (0, common_1.Controller)('api/getafe'),
    __metadata("design:paramtypes", [jugador_service_1.JugadorService])
], JugadorController);
//# sourceMappingURL=jugador.controller.js.map