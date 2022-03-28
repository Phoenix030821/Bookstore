import React from 'react';
import { Carousel } from 'antd';
import {Link, withRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import '../css/Carousels.css'

export class Carousels extends React.Component {
    render(){
        return(
            <div className="page-inside-carousel">
                <Carousel autoplay>
                    <div >
                        <img src={require("../../public/book1.jpg")} alt="1" />
                    </div>
                    <div>
                        <img src={require("../../public/book2.jpg")} alt="2" />
                    </div>
                    <div>
                        <img src={require("../../public/book3.jpg")} alt="3" />
                    </div>
                    <div>
                        <img src={require("../../public/book4.jpg")} alt="4" />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default withRouter(Carousels);

