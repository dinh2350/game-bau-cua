import React, { Component } from "react";
import { connect } from "react-redux";

class Choi extends Component {
  render() {
    const { choiGame } = this.props;
    return (
      <div className="xi-ngau__play text-center">
        <button
          className="btn btn-success btn-lg"
          style={{
            fontSize: 30,
            backgroundColor: "white",
            color: "#d83226",
            fontWeight: "bold",
          }}
          onClick={() => {
            choiGame();
          }}
        >
          Chơi Game
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    choiGame: () => {
      const actions = {
        type: "CHOI_GAME_XI_NGAU",
      };
      dispatch(actions);
    },
  };
};

export default connect(null, mapDispatchToProps)(Choi);
