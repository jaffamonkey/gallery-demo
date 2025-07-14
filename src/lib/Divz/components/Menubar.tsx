import React, { useState } from 'react';
const [setDemo] = useState<number>(2);


export const Menubar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleMenubar = (): void => {
    setVisible(prev => !prev);
  };

  return (
    <>
      <button className="toggle-button" onClick={toggleMenubar}>
        ☰
      </button>

      {visible && (
        <div className="menubar">
          <a className="fa fa-camera" href="#" onclick="setDemo(3);return false;" />
          <a className="fa fa-instagram" href="https://www.instagram.com/thelillyguildtrust" />
          <a className="fa fa-envelope" href="mailto:terrormarclub@gmail.com" />
          <a className="fa fa-phone" href="tel:+447394074047" />
        </div>
      )}
    </>
  );
};
