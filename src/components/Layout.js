import React from 'react'
import { Link } from 'gatsby'

import {
    Layout, Menu, Breadcrumb, Icon,  Row, Col, BackTop
} from 'antd';


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

import { rhythm, scale } from '../utils/typography'
import Sidemenu from './Sidemenu'

import 'antd/dist/antd.min.css';
import './layout.css';

class MainLayout extends React.Component {

    state = {
        current: 'mail',
    }
    
    handleClick = (e) => {
        //No Active
    }

    render() {
        const { location, title, children } = this.props
        const isRootPath = location.pathname === `${__PATH_PREFIX__}/`
        const pageNumber = location.pathname
        .split('/')
        .filter(Boolean)
        .pop()
        const isPaginatedPath = pageNumber && Boolean(pageNumber.match(/^[0-9]+$/))
        let header
    
        /*
        if (isRootPath || isPaginatedPath) {
        header = (
            <h1
            style={{
                ...scale(1.5),
                marginBottom: rhythm(1.5),
                marginTop: 0,
            }}
            >
            <Link
                style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
                }}
                to={`/`}
            >
                {title}
            </Link>
            </h1>
        )
        } else {
        header = (
            <h3
            style={{
                fontFamily: `Montserrat, sans-serif`,
                marginTop: 0,
            }}
            >
            <Link
                style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
                }}
                to={`/`}
            >
                {title}
            </Link>
            </h3>
        )
        }
        */
        return (
            <Layout>
                {/*  Menu Sider  */}
                
                {/* Main Layout */}
                <Layout id="mainlayout"  >
                    <Header id="header" style={{ position: 'relative',  background: '#3c8dbc ', padding: 0 , lineHeight: 0 }}>
                    
                    <Menu
                        theme="light"
                        id="topbar"
                        mode="horizontal"
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px', background:'#2d2d2d', WebkitBoxShadow: '0 2px 8px #f0f1f2', boxShadow: '0 2px 8px #f0f1f2' }}
                    >
                        <Menu.Item style={{color: 'white'}} key="1">
                            <Link
                                style={{
                                boxShadow: `none`,
                                textDecoration: `none`,
                                color: `inherit`,
                                }}
                                to={`/`}
                            >
                            {title}
                            </Link>
                        </Menu.Item>

                        
                        <Menu.Item style={{color: 'white', float: 'right'}} key="2">
                            <a style={{color: 'white'}} target="_blank" href="https://josesalasni.github.io"
                            >
                            Sobre mi
                            </a>
                        </Menu.Item>

                    </Menu>
                            
                    </Header>

                    <Content style={{ background: '#fff' }}>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        
                            <Row>
                                {/* Main Content where render sub components */}
                                <Col lg={18} span={24} >
                                    <div id="mainCon" style={{  borderRight:'1px solid #ebedf0', background: '#fff', paddingLeft: '70px', paddingRight:'70px' ,margin: '24px 24px 24px',  minHeight: 360 }}>
                                        {children}
                                    </div>
                                </Col>

                                <Col lg={6} span={24}>
                                    <div style={{ textAlign: 'center', margin: '24px, 24px , 24px'}} >
                                        <Sidemenu/>
                                    </div>

                                </Col>


                            </Row>
                        
                        </Layout>
                        
                    </Content>

                     
                    <div>
                        <BackTop />
                    </div>
                        
                    <Footer style={{ background:'#2d2d2d', color: 'white', textAlign: 'center' }}>
                        {new Date().getFullYear() }, Desarrollado por Carlos Salas usando React.Js y Gatsby 
                        
                    </Footer>    
                   
                </Layout> 
            </Layout>    
        )
    } 
}

export default MainLayout;
