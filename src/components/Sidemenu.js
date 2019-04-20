import React from 'react'
import { Card, Icon, Row, Col } from 'antd'
import './Sidemenu.css'
import './Recents'
import Recents from './Recents';

const { Meta } = Card;

class Sidemenu extends React.Component {
    render(){
        return(
            <div id="sideMenu" style={ {display: 'inline-block', marginTop: '24px'}}>
                <div className="card" style={ {display: 'inline-block'}}>
                    <div className="card-banner">
                        <div className="card-profile">
                        </div>

                        <div style={{paddingLeft: '10px'}} className="card-content">
                            <h3>Carlos José Salas</h3>
                            <p> Estudiante de Programación de Nicaragua </p>
                        </div>

                        <div  className="card-links">
                            <Row>
                                <Col span={8}> 
                                    <a href="https://github.com/josesalasni" target="_blank"><Icon type="github" style={{fontSize: '2em'}} /></a>
                                </Col>
                                <Col span={8}> 
                                    <a href="mailto:josesalasni@gmail.com?Subject=Hello%20again" target="_blank"><Icon type="mail" style={{fontSize: '2em'}} /></a>
                                </Col>
                                <Col span={8}> 
                                <a href="https://www.facebook.com/salascarlosyy" target="_blank"><Icon type="facebook" style={{fontSize: '2em'}} /></a>
                                </Col>
                            </Row>
                        </div>

                    </div>
                </div>
                <Recents/>
            </div>
        )
    }
}

export default Sidemenu;