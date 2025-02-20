import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

function Button({ className, href, onClick, children, px, white }) {

  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`
  const renderButton = () => {
    return (
      <>
        <button className={classes}>
          <span>{children}</span>
          {ButtonSvg(white)}
        </button>
      </>
    );
  };
  return renderButton();
}

export default Button;
