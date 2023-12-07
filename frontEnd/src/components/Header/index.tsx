import { useCallback, useContext, useMemo, useState } from "react";
import { Button } from "../Button";
import { ContentContainer, HeaderContainer, ImageContainer } from "./styles";
import { User } from "phosphor-react";
import Loading from "../Input/Loading";
import { ModalContainer } from "@/pages/users/styles";
import { UserForm } from "@/pages/users/components/UserForm";

interface HeaderProps {
  label: string;
}

export function Header() {
  const [loading, setLoading] = useState(false);
  const [isModalCreateUserOpen, setIsModalCreateUserOpen] = useState(false);

  const customModalStyles = {
    content: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModalCreateUser() {
    setIsModalCreateUserOpen(true);
  }

  const closeModalCreateUser = useCallback(async () => {
    setIsModalCreateUserOpen(false);
  }, []);

  const modalCreateUser = useMemo(() => {
    return (
      <ModalContainer isOpen={isModalCreateUserOpen} style={customModalStyles}>
        <h1>CADASTRE-SE NA MAIOR PLATAFORMA ANALYTICS DA AMÉRICA LATINA</h1>
        <UserForm onClose={closeModalCreateUser} />
      </ModalContainer>
    );
  }, [closeModalCreateUser, customModalStyles, isModalCreateUserOpen]);

  return (
    <>
      <HeaderContainer>
        <ContentContainer>
          <ImageContainer
            src="https://signup1.bimachine.com/wp-content/uploads/2023/08/Logo-BIMachine-300x62.png"
            alt=""
          />
          <Button label="Cadastre-se" onClick={openModalCreateUser} />
        </ContentContainer>
      </HeaderContainer>
      {modalCreateUser}
    </>
  );
}
