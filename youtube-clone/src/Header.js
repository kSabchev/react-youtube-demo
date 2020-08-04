import React from 'react'
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

function Header() {
    return (
        <div className="header">
            <h1>I am a header</h1>
            <MenuSharpIcon />
            <img 
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="" />
            <input type="text"/>
            <SearchSharpIcon />
        </div>
    )
}

export default Header