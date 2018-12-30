import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { menuArrs } from './menuConfig';
import { Header } from '../../components/index';
//import qs from 'qs';

// function request(params){
//   return window.request(`${window.BASE_URL}/asdasdasdsda?${qs.stringify(params)}`, {
//     method : 'post',
//     data : JSON.stringify(params)
//   });
// }

// async function getReq(params){
//   let ret = await request(params);
//   console.info('ret',ret);
// }



class BasicLayout extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    }
    this.OnSelect = this.OnSelect.bind(this);
  }


  componentDidMount() {
    window.addEventListener('scroll', () => this.onScroll(document.documentElement));
  }

  onScroll(i){
    let { dispatch } = this.props;
    dispatch({
      type : 'global/updateState',
      payload : {
        lightVisible : i.scrollTop/window.fontSize > 1.5
      }
    })
  }

  // 菜单处理
  OnSelect(item) {
    let { dispatch } = this.props;
    dispatch(routerRedux.push({ pathname: item.key }))
  }

  render() {
    // let { lightVisible } = this.state;
    let { global, children } = this.props;
    let { lightVisible } = global;
    // header属性
    let headerProps = {
      menus : menuArrs,
      lightVisible,

      // 方法
      OnSelect : this.OnSelect
    }
    return (
      <div className={styles.mainPage}>
        <Header { ...headerProps } />
        <div style={{height: '1500px', width: '100%'}}>
          { children }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ global }){
  return { global }
}

export default connect(mapStateToProps)(BasicLayout);
