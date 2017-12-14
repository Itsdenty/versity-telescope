import * as categoryCollection from '../actions/category-collection';

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
  action: categoryCollection.Actions
): State {
  switch (action.type) {
    case categoryCollection.LOAD_CATEGORY: {
      return {
        ...state,
        loading: true,
      };
    }

    case categoryCollection.LOAD_CATEGORY_SUCCESS: {
      console.log('here at category')
      return {
        loaded: true,
        loading: false,
        ids: action.payload.map(book => book.id)
      };
    }

    case categoryCollection.ADD_CATEGORY_SUCCESS:
    case categoryCollection.REMOVE_CATEGORY_FAIL: {
      if (state.ids.indexOf(action.payload.id) > -1) {
        return state;
      }

      return {
        ...state,
        ids: [...state.ids, action.payload.id],
      };
    }

    case categoryCollection.REMOVE_CATEGORY_SUCCESS:
    case categoryCollection.ADD_CATEGORY_FAIL: {
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
