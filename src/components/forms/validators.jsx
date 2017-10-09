/**
 * all the validators return the rule violation <Boolean>
 *   if value violates the rule then return true, false otherwise
 * @param val
 */
import React from 'react';

const getValue = () => (
  1
);
export const isRequired = prop => (
  getValue(prop) === null || getValue(prop) === undefined
);
export const isNotEmpty = val => (
  isRequired(val) || !getValue(val)
);
export const isTheSame = (val1, val2) => (
  getValue(val1) === getValue(val2)
);

export const Validated = (target, name, descriptor) => {
  const oldValue = descriptor.value;
  descriptor.value = () => {
    this.errors = [];
    if (this.validators && this.validators.length) {
      this.validators.forEach((validator) => {
        const result = validator();
        if (result) {
          this.errors.push(result);
        }
      });
    }
    if (!this.errors.length) {
      return oldValue(...arguments);
    }
    return null;
  };

  return descriptor;
};
export const Validatable = () => class extends React.Component {
  componentDidMount() {
    if (this.validators && this.validators.length) {
      console.log(this.validators);
    }
  }
};
