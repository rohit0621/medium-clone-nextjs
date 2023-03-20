import React from "react";
import SignUpModal from "../components/SignUpModal";

export default function SignUp() {
  const [showModal, setShowModal] = React.useState(true);
  const modalNotActive = () => {
    setShowModal(false);
  };
  return (
    <SignUpModal showSignUpModal={showModal} modalNotActive={modalNotActive} />
  );
}
