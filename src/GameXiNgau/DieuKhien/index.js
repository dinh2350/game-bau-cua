import React, { Component } from "react";
import { connect } from "react-redux";
import { chonTaiXiuActions } from "../../redux/actions/GameXiNgau";
class DieuKhien extends Component {
  renderXucXac = (list) => {
    return list.map((ele, index) => {
      return (
        <span key={index}>
          <i
            className={ele.classes}
            style={{ color: "white", fontSize: 150 }}
          />
        </span>
      );
    });
  };

  render() {
    const { xucXac, chonTaiXiu } = this.props;
    return (
      <div className="xi-ngau__control row text-center mt-4">
        <div className="col-4">
          <button
            className="btn btn-lg rounded-circle"
            style={{ overflow: "hidden" }}
            onClick={() => {
              chonTaiXiu(true);
            }}
          >
            <img src="./img/tai.PNG" alt="tai" />
          </button>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-around">
          {this.renderXucXac(xucXac)}
        </div>
        <div className="col-4">
          <button
            className="btn btn-lg rounded-circle"
            style={{ overflow: "hidden" }}
            onClick={() => {
              chonTaiXiu(false);
            }}
          >
            <img src="./img/xiu.PNG" alt="xiu" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xucXac: state.GameXiNgau.xucXac,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chonTaiXiu: (taiXiu) => {
      dispatch(chonTaiXiuActions(taiXiu));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DieuKhien);
