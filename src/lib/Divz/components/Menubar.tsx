import React, { useState } from 'react';

const [setDemo] = useState<number>(2);

export const Menubar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleMenubar = (): void => {
    setVisible((prev: any) => !prev);
  };

  return (
    <>
      <button className="toggle-button" onClick={toggleMenubar}>
        ☰
      </button>

      {visible && (
        <div className="menubar">
          <a
            key="3"
            className="fa fa-camera"
            onClick="setDemo(3)"
          />
          <a className="fa fa-instagram" href="https://www.instagram.com/thelillyguildtrust" />
          <a className="fa fa-envelope" href="mailto:terrormarclub@gmail.com" />
          <a className="fa fa-phone" href="tel:+447394074047" />
        </div>
      )}
    </>
  );
};
