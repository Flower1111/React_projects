import React from 'react';
import {Link}  from 'react-router-dom';
 
export default class Nav extends React.Component{
    render(){
        return <div>
                <Link to="/">Main page</Link> 
                <Link to="/products">Products</Link>
              </div>;
    }
}