import React from 'react';
import './header.css';

const Header = (props) => {
    return (
    <div className="header">
        <div className="title">
            FREE IMAGE
        </div>
        <form onSubmit={props.renderNext}>
          <input type="text" placeholder="Search images" onChange={props.handleSearch}/>
          <button type="submit">Search</button>
        </form>
    </div>
    );
};

export default Header;