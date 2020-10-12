import {isNumber, isNumberString} from 'class-validator';
import {ValidationFunction} from '@pimba/excalibur/lib';

const esNumeroStringNumero = {
    isNumberString: value => isNumberString(value),
    isNumber: value => isNumber(value),
};

const arregloNumeros = {
    isArrayNumber: value => value instanceof Array && value.every(val => !isNaN(+val)),
};

export const VALIDADORES_PERSONALIZADOS: Record<string, Record<string, ValidationFunction>> = {
    esNumeroStringNumero,
    arregloNumeros,
};



