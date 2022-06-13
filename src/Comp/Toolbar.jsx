import React from 'react'

const Toolbar = (props) => {
  return (
          <div className="toolbar">
            <img className="myLogo" src='logo.png' alt='Personal Logo' title="Personal Logo" />
            {props.text}
            <i className={props.icon} onClick={props.onClick} />
          </div>
        );
      };

export default Toolbar