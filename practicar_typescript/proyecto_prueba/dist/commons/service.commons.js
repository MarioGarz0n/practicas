"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    findAll() {
        return this.getRepository().find();
    }
    findOne(id) {
        return this.getRepository().findOneBy({ id: id });
    }
    save(entity) {
        return this.getRepository().save(entity);
    }
    saveMany(entities) {
        return this.getRepository().save(entities);
    }
    async delete(id) {
        await this.getRepository().delete(id);
    }
    count(options) {
        return this.getRepository().count(options);
    }
    suma(num1, num2) {
        const sum = Number(num1) + Number(num2);
        return sum;
    }
    resta(num1, num2) {
        const res = Number(num1) - Number(num2);
        return res;
    }
    multiplicacion(num1, num2) {
        const mul = Number(num1) * Number(num2);
        return mul;
    }
    division(num1, num2) {
        let div;
        if (num2 != 0) {
            div = Number(num1) / Number(num2);
        }
        else {
            div = "No se puede dividir entre 0.";
        }
        return div;
    }
    exponencial(num, exp) {
        let res;
        if (exp == 0)
            res = 1;
        else if (exp == 1)
            res = num;
        else {
            res = num;
            for (let i = 1; i < exp; i++) {
                res = res * num;
            }
        }
        return res;
    }
    calculadora(num1, num2, operador) {
        let res;
        if (operador.toLowerCase() === 'suma' || operador === '+') {
            res = this.suma(num1, num2);
        }
        else if (operador.toLowerCase() === 'resta' || operador === '-') {
            res = this.resta(num1, num2);
        }
        else if (operador.toLowerCase() === 'multiplicacion' || operador === '*') {
            res = this.multiplicacion(num1, num2);
        }
        else if (operador.toLowerCase() === 'division') {
            res = this.division(num1, num2);
        }
        else if (operador.toLowerCase() === 'exponencial' || operador === '^') {
            res = this.exponencial(num1, num2);
        }
        else {
            res = "No ha introducido una operacion válida.";
        }
        return res;
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=service.commons.js.map