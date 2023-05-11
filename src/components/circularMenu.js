import { useState } from 'react';
import CircularMenuItem from './CircularMenuItem';
import CircularMenuIcon from './CircularMenuIcon';
function CircularMenu({pages}){
    //state variables
    const [isOpen, setIsOpen]=useState(false);

    // -----------------------------------
    //handle set is open
    const handleSetIsOpen=()=>{
        setIsOpen(prevBool=>!prevBool);
    }
    return(
        <div class="circular-menu">
        <div class="menu-button" onClick={handleSetIsOpen}>
            {isOpen? <CircularMenuIcon/> : <CircularMenuIcon/>}
        </div>
        { 
          pages.map(([page],index)=>(
            <CircularMenuItem
                key={page}
                page={page}
                rotation={(360/pages.length)*index}
                menuIsOpen={isOpen}
                transitionDelay={index*75}

                />
          ))
        }
      </div>
    )
}
export default CircularMenu;