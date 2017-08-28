import React , { Component }from 'react';
import icon from '../../asset/img/index.png'
class Home extends Component {
    render() {
      return  (
       		<div className="banner">
       			<img src={icon} alt="" />
       		</div>
        )
    }
}

export default Home