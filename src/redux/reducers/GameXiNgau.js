import { getRandomInt } from "../../utils";
import { CHON_TAI_XIU } from "../constants/GameXiNgau";
const danhSachXucXac = [
  { ma: "one", classes: "fa fa-dice-one", so: 1 },
  { ma: "two", classes: "fa fa-dice-two", so: 2 },
  { ma: "three", classes: "fa fa-dice-three", so: 3 },
  { ma: "four", classes: "fa fa-dice-four", so: 4 },
  { ma: "five", classes: "fa fa-dice-five", so: 5 },
  { ma: "six", classes: "fa fa-dice-six", so: 6 },
];

const initialSate = {
  xucXac: [
    { ma: "three", classes: "fa fa-dice-three", so: 3 },
    { ma: "four", classes: "fa fa-dice-four", so: 4 },
    { ma: "five", classes: "fa fa-dice-five", so: 5 },
  ],
  taiXiu: false, // false là xiu , true la tai
  soBanThang: 0,
  soBanChoi: 0,
};

const GameXiNgau = (state = initialSate, actions) => {
  switch (actions.type) {
    case CHON_TAI_XIU: {
      let { taiXiu } = state;
      taiXiu = actions.taiXiu;
      return { ...state, taiXiu };
    }
    case "CHOI_GAME_XI_NGAU": {
      let { taiXiu, soBanThang, soBanChoi } = state;
      let xucXac = [
        danhSachXucXac[getRandomInt(6)],
        danhSachXucXac[getRandomInt(6)],
        danhSachXucXac[getRandomInt(6)],
      ];
      //   tính tổng điểm số xúc xắc
      let tongXucXac = xucXac.reduce((tong, ele) => (tong += ele.so), 0);
      if (tongXucXac >= 3 && tongXucXac <= 10) {
        //   xiu
        tongXucXac = false;
      } else {
        // 11-18
        //   tài
        tongXucXac = true;
      }
      // kiểm tra thắng hay thua
      if (taiXiu === tongXucXac) {
        // thang
        soBanThang += 1;
      } else {
        // thua
      }
      soBanChoi++;
      return { ...state, xucXac, soBanThang, soBanChoi };
    }
    default:
      break;
  }
  return { ...state };
};

export default GameXiNgau;
