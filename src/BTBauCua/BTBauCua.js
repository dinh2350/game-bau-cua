import React, { Component } from "react";
import DanhSachDatCuoc from "./DanhSachDatCuoc";
import XucXac from "./XucXac";
import "./BTBauCua.css";
import { connect } from "react-redux";
import { choiGameAction } from "../redux/actions/GameBauCua";
class BTBauCua extends Component {
  render() {
    return (
      <div classname="bau-cua">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="bau-cua__tien font-weight-bold">
              Tổng Tiền : {this.props.tongTien}$
            </div>
            <h2 className="text-center text-danger">Bầu Cua</h2>
            <div>
              <btn className="btn btn-info " onClick={this.props.choiGame}>
                Chơi Game
              </btn>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-7">
              <DanhSachDatCuoc />
            </div>
            <div className="col-md-12 col-lg-5">
              <XucXac />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tongTien: state.gameBauCua.tongTien,
});

const mapDispatchToProps = (dispatch) => ({
  choiGame: () => dispatch(choiGameAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BTBauCua);
