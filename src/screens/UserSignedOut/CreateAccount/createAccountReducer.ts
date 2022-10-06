import { CreateAccountState } from '.';

export interface CreateAccountAction {
  type: 'change' | 'submit';
  payload: Record<string, any>;
}

export function createAccountReducer(
  state: CreateAccountState,
  action: CreateAccountAction,
) {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        ...action.payload,
        validators: { ...state.validators, ...action.payload.validators },
      };

    case 'submit':
      const invalidForm = Object.values(state.validators).some(
        (validator) => validator.length > 0,
      );

      if (invalidForm) {
        return {
          ...state,
          ...{ submitForm: false },
          validators: { ...state.validators },
        };
      } else {
        return {
          ...state,
          ...{ submitForm: true },
          validators: { ...state.validators },
        };
      }

    default:
      throw new Error();
  }
}
