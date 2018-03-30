import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from '../../redux/actions/userInfoActions';
import Print from '../Print';

class UserInfo extends Component {

  onClick = () => {
    this.props.getUserInfo()
  };

  render() {
    const {userInfo, isLoading, errorMsg} = this.props.userInfo;
    Print.bind(null, 'Hello webpack');

    return (
      <div>
        {
          isLoading ? '请求信息中......' :
            (
              errorMsg ? errorMsg :
                <div>
                  <p>用户信息：</p>
                  <p>用户名：{userInfo.name}</p>
                  <p>介绍：{userInfo.intro}</p>
                </div>
            )
        }
        <button onClick={this.onClick}>
          请求用户信息
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => dispatch(getUserInfo())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);