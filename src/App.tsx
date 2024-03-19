import { Provider } from "react-redux";

import { TodoList } from "./Components/ TodoList";
import { AddTodo } from "./Components/AddTodo";
import { store } from "./Store";

export function App() {
  return (
    <Provider store={store}>
      <TodoList />
      <AddTodo />
    </Provider>
  );
}
