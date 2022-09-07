import React, { Fragment, useState } from "react";
import classes from "./Modal.module.css";
import Message from "../message/Message";
import { CgCloseO } from "react-icons/cg";
import { FaRegSmileBeam } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(true);
  const[modaleMessage, setModalMessage]= useState(props.message)
  const closeModalHandler = () => {
    setShowModal(false);
};
console.log(`show modal from modal component ${showModal}`);


  return (
    <Fragment>
      {showModal && (
        <div className={classes["modal-container"]} onClick={closeModalHandler}>
          <div className={classes["modal"]}>
            <Message message={props.message} />
            <div className={classes["modal-icon"]}>
              {props.success && <FaRegSmileBeam />}
              {!props.success && <MdOutlineErrorOutline />}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
