import { combineReducers } from "redux";
import GameBauCua from "./GameBauCua";
import GameXiNgau from "./GameXiNgau";
const rootReducer = combineReducers({
  // child reducers
  gameBauCua: GameBauCua,
  GameXiNgau,
});

export default rootReducer;
