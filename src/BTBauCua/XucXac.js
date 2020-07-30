import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderListdanhSachXucXac = (list) => {
    return list.map((item, index) => (
      <div className={`bau-cua__xoay bau-cua__xoay--${index + 1}`} key={index}>
        <img src={item.hinhAnh} alt="hinhanh" />
      </div>
    ));
  };
  render() {
    return (
      <div className="bau-cua__do w-100 h-100">
        <img src="./img/dia.png" alt="hinh" className="w-100 h-100" />
        {this.renderListdanhSachXucXac(this.props.danhSachXucXac)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachXucXac: state.gameBauCua.xucXac,
});

export default connect(mapStateToProps)(XucXac);
