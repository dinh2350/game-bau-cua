import React, { Component } from "react";

import { connect } from "react-redux";
import { tangCuocAction, giamCuocAction } from "../redux/actions/GameBauCua";

class DanhSachDatCuoc extends Component {
  renderdanhSachCuoc = (list) => {
    return list.map((item, index) => {
      return (
        <div className="card col-4 " key={index}>
          <img
            className="card-img-top"
            src={item.hinhAnh}
            alt="Card cap"
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.ten}</h5>
            <div className="d-flex justify-content-around align-items-center">
              <button
                className="btn btn-info"
                onClick={() => this.props.giamCuoc(item.ma)}
              >
                -
              </button>
              <span>{item.diemCuoc || 0}$</span>
              <button
                className="btn btn-info"
                onClick={() => this.props.tangCuoc(item.ma)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="bau-cua__chon">
        <div className="bau-cua__bang row">
          {this.renderdanhSachCuoc(this.props.danhSachCuoc)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachCuoc: state.gameBauCua.danhSachCuoc,
});

const mapDispatchToProps = (dispatch) => ({
  tangCuoc: (ma) => dispatch(tangCuocAction(ma)),
  giamCuoc: (ma) => dispatch(giamCuocAction(ma)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachDatCuoc);
