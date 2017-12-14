import * as schoolCollection from '../actions/school-collection';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
};

export function reducer(
  state = initialState,
  action: schoolCollection.Actions
): State {
  switch (action.type) {
    case schoolCollection.LOAD_SCHOOL: {
      return {
        ...state,
        loading: true,
      };
    }

    case schoolCollection.LOAD_SCHOOL_SUCCESS: {
      console.log('here in school')
      return {
        loaded: true,
        loading: false,
        ids: action.payload.map(book => book.id)
      };
    }

    case schoolCollection.ADD_SCHOOL_SUCCESS:
    case schoolCollection.REMOVE_SCHOOL_FAIL: {
      if (state.ids.indexOf(action.payload.id) > -1) {
        return state;
      }

      return {
        ...state,
        ids: [...state.ids, action.payload.id],
      };
    }

    case schoolCollection.REMOVE_SCHOOL_SUCCESS:
    case schoolCollection.ADD_SCHOOL_FAIL: {
      return {
        ...state,
        ids: state.ids.filter(id => id !== action.payload.id),
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
