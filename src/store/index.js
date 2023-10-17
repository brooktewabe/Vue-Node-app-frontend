import { createStore } from "vuex";
import { auth } from "./auth.module";
import todos from './modules/todos';

const store = createStore({
  modules: {
    auth,
    todos
  },
});

export default store;
