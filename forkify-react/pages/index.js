import { Fragment, useState } from "react";

import styles from "../styles/Home.module.css";

import Message from "../components/message/Message";
import Modal from "../components/ui/Modal";


export default function Home() {
  const [showModal, setShowModal] = useState(true);
  return (
    <Fragment>
      {showModal && <Modal/>} 
    </Fragment>
  );
}
