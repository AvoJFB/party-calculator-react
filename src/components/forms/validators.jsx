/**
 * all the validators return the rule violation <Boolean>
 *   if value violates the rule then return true, false otherwise
 * @param val
 */
const validators = {
  isRequired: val => (
    val === null || val === undefined
  ),
  isNotEmpty: val => (
    typeof val === 'string' && !val
  ),
  isTheSame: (val1, val2) => (
    val1 === val2
  ),
};

export const Validated = (target, name, descriptor) => {
  const oldValue = descriptor.value;
  descriptor.value = function value(...args) {
    this.$errors = {};
    if (this.stopSubmitPropagation === true && args[0]) {
      args[0].stopPropagation();
      args[0].preventDefault();
    }
    if (this.validators && this.validators.length) {
      this.validators.forEach((validator) => {
        validator.validate();
      });
    }
    this.setState({ $validated: true });
    if (Object.keys(this.$errors).length === 0) {
      return oldValue.apply(this, ...args);
    }
    return null;
  };
  return descriptor;
};
export const Validatable = Target => class extends Target {
  isValid() {
    return !this.$errors || Object.keys(this.$errors).length === 0;
  }

  getErrorMessages(key) {
    if (this.isValid() || !this.$errors[key] || this.$errors[key].length === 0) {
      return [];
    }
    const errors = this.$errors[key];
    return errors.map(errorName => (
      this.errorMessages[errorName](this.scheme[key], key)
    ));
  }

  resetErrorsFor(key) {
    if (this.$errors && this.$errors[key]) {
      delete this.$errors[key];
    }
  }

  getDefaultErrorMessage(key) {
    return this.state.$validated ? this.getErrorMessages(key)[0] || '' : '';
  }

  resetValidation() {
    if (this.state.$validated) {
      this.setState({ $validated: false });
    }
  }

  componentWillMount() {
    if (this.scheme) {
      this.validators = [];
      Object.keys(this.scheme).forEach((key) => {
        this.validators.push({
          validate: () => {
            const definedValidators = (this.scheme[key].validators || []);
            const errors = [];
            definedValidators.forEach((validator) => {
              let validationResult;
              let validatorName;
              if (typeof validator === 'string') {
                validationResult = validators[validator].apply({ key }, [this.state[key]]);
                validatorName = validator;
              } else {
                validationResult = validator.fn();
                validatorName = validator.name;
              }
              if (validationResult === true) {
                errors.push(validatorName);
              }
            });
            if (errors.length > 0) {
              this.$errors[key] = errors;
            }
          },
        });
      });
    }
  }
};
