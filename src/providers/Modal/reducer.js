const actions = {
  OPEN: 'MODAL/OPEN',
  CLOSE: 'MODAL/CLOSE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.OPEN: {
      return {
        ...state,
        isOpened: true,
        title: action.title,
        content: action.payload,
      };
    }

    case actions.CLOSE: {
      return {
        ...state,
        isOpened: false,
        title: '',
        content: null,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default reducer;

export { actions };
