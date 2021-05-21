import { isNumber, isNumberString } from 'class-validator';
import { ValidationFunction } from '@pimba/excalibur/lib';

const isNumberStringOrNumber = {
  isNumberString: value => isNumberString(value),
  isNumber: value => isNumber(value),
};

const isNumberArray = {
  isArrayNumber: value => value instanceof Array && value.every(val => !isNaN(+val)),
};

export const CUSTOM_VALIDATORS: Record<string, Record<string, ValidationFunction>> = {
  isNumberStringOrNumber,
  isNumberArray,
};



