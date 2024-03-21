import "./styles/global.css";
import { Provider } from "react-redux";

import { store } from "./Store";
import { Player } from "./pages/Player";

export function App() {
  return (
    <Provider store={store}>
      <Player />
    </Provider>
  );
}
