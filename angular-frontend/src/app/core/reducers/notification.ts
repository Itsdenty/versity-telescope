import * as notification from '../actions/notification';

export interface State {
  errorExist: boolean,
  errorMessage: string,
  successMessage: string,
  successExist: boolean,
}

const initialState: State = {
  errorExist: false,
  errorMessage: 'Sorry an error exist',
  successMessage: 'Action completed succesfully',
  successExist: false,
};

export function reducer(state = initialState, action: notification.Actions): State {
  switch (action.type) {
    case notification.SET_ERROR:
      return {
        errorExist: true,
        successExist: false,
        errorMessage: action.payload,
        successMessage: state.successMessage
      };
    case notification.SET_SUCCESS:
      return {
        errorExist: false,
        successExist: false,
        errorMessage: action.payload,
        successMessage: state.successMessage
      };

    case notification.REMOVE_ERROR:
      return {
        errorExist: false,
        successExist: state.successExist,
        errorMessage: state.errorMessage,
        successMessage: action.payload
      };
    case notification.REMOVE_SUCCESS:
      return {
        errorExist: state.errorExist,
        successExist: false,
        errorMessage: state.errorMessage,
        successMessage: action.payload
      };

    default:
      return state;
  }
}

export const getErrorState = (state: State) => {
  state.errorExist,
  state.errorMessage
};
export const getSuccessState = (state: State) => {
  state.successExist,
  state.successMessage
}
