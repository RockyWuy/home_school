import React from 'react';
import styles from './index.less';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;

class Header extends React.Component {
  state = {
    current: '',
  }

  UNSAFE_componentWillMount() {
    let menus = this.props.menus;
    if(menus && menus.length>0) {
      this.setState({
        current: menus[0].code
      })
    }
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    let { lightVisible , menus, OnSelect } = this.props;
    console.log(OnSelect)
    return (
      <React.Fragment>
        <div className={styles.title}>
          <div className={styles.content}>
            <div className={styles.logo}></div>
            <Menu
              onClick={this.handleClick}
              onSelect={OnSelect}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              {
                menus && menus.length>0 && menus.map( (item, index) => {
                  if(item.children && item.children.length>0) {
                    const children = item.children;
                    return(
                      <SubMenu key = {item.path} title={<span className="submenu-title-wrapper">{ item.name }</span>}>
                        {
                          children.map( opt=> {
                            return(
                              <Menu.Item key={ opt.path }>{ opt.name }</Menu.Item>
                            )
                          })
                        }
                      </SubMenu>
                    )
                  }else {
                    return(
                      <Menu.Item key={ item.path }>{ item.name }</Menu.Item>
                    )
                  }
                })
              }
            </Menu>
          </div>
        </div>
        <div className={styles.floatHeader} style = {{ transform : `translateY(${lightVisible ? 0 : '-105%'})` }}>
          <div className={styles.floatContent}>
            <div className={styles.floatLogo}></div>
            <Menu
              onClick={this.handleClick}
              onSelect={OnSelect}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              {
                menus && menus.length>0 && menus.map( (item, index) => {
                  if(item.children && item.children.length>0) {
                    const children = item.children;
                    return(
                      <SubMenu key={ index } title={<span className="submenu-title-wrapper">{ item.name }</span>}>
                        {
                          children.map( opt=> {
                            return(
                              <Menu.Item key={ opt.code }>{ opt.name }</Menu.Item>
                            )
                          })
                        }
                      </SubMenu>
                    )
                  }else {
                    return(
                      <Menu.Item key={ item.code }>{ item.name }</Menu.Item>
                    )
                  }
                })
              }
            </Menu>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default Header;
