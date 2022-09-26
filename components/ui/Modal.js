import { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};



const Modal = (props) => {
  // 🕳️🕳️🕳️ to rewrite our document in next js document, to create portal in _document.js [created by us], we should first create a page named _document.js [must named like this], add code that written exactly as it is, add our portal element [a div with id like 'modal-root'], then use below code to rerender document file, and return react component conditionally like this
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return ()=>setMounted(false)
  }, []);


  if (mounted) {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onCloseModal={props.onCloseModal} />,
          document.getElementById("modal-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay onCloseModal={props.onCloseModal}>{props.children}</ModalOverlay>,
          document.getElementById("modal-root")
        )}
      </Fragment>
    );
  } else {
    return null;
  }
};

export default Modal;
