import React from 'react';


function Footer(props){
  const { textColor } = props.themeObject;

  return(
    <div className=''>
     <footer className="text-center text-lg-start">
      <div className="text-center p-3">
        © 2020 Copyright:
        <span className={` ${textColor}`}> Ismail Hanadi</span>
      </div>
    </footer>
    </div>
  )
}

export default Footer