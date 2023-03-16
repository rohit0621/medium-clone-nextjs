import React from "react";
import LoginModal from "../components/LoginModal";

export default function LoginPage() {
  const [showModal, setShowModal] = React.useState(true);
  const modalNotActive = () => {
    setShowModal(false);
  };
  return (
    <LoginModal showLoginModal={showModal} modalNotActive={modalNotActive} />
  );
}
