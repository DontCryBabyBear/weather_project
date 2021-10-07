import React from 'react'
import Search from '../search/Search'
import classes from './Header.module.css'
function Header({setSearch}) {
    
  
    return (
        <div className={classes.content}>
            {setSearch? <Search setSearch={setSearch}/> : <span></span>}
        </div>
    )
}

export default Header
