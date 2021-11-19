import { createStore, action } from 'easy-peasy';

const store = createStore({
  connection: {
    connected: null,
    setConnected: action((state, payload) => {
      state.connected = payload;
    }),
  },
});

export default store;