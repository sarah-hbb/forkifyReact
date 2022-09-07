import { Fragment, useState } from "react";

import styles from "../styles/Home.module.css";

import Message from "../components/message/Message";
import Modal from "../components/ui/Modal";


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler=()=>{
    setShowModal(true);
    console.log(showModal);
  }

  const closeModalHandler =()=>{
    setShowModal(false)
  }
  return (
    <Fragment>
      {showModal && <Modal onClose={closeModalHandler}> {`some text message`}
        </Modal>} 
      <button onClick={showModalHandler}> show modal </button>
    </Fragment>
  );
}
