import {
  emptyField,
  lessValue,
  higherValue,
} from './baseValidations';

export const chainIDRules = (value, min, max) => {
  if (emptyField(value)) {
    return {
      validation: false,
      message: 'This field is required',
    }
  };

  if (lessValue(value, min)) {
    return {
      validation: false,
      message: `This value must be greater than ${min}`,
    };
  };

  if (higherValue(value, max)) {
    return {
      validation: false,
      message: `This value must be less than ${max}`,
    };
  };

  return {
    validation: true,
    message: null
  }
}

export const addressRules = (value) => {
  if (emptyField(value)) {
    return {
      validation: false,
      message: 'This field is required',
    }
  };

  return {
    validation: true,
    message: null
  }
}