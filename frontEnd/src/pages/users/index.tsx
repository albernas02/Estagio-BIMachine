import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { UserContainer, ContentContainer, ModalContainer } from "./styles";
import { UserForm } from "./components/UserForm";
import Loading from "@/components/Input/Loading";

export default function Users() {
  // const [userList, setUserList] = useState<User[]>();
  const [isModalCreateUserOpen, setIsModalCreateUserOpen] = useState(false);
  // const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <UserContainer>
        {loading ? (
          <Loading />
        ) : (
          <ContentContainer>
            <Button label="Cadastre-se" onClick={openModalCreateUser} />
          </ContentContainer>
        )}
      </UserContainer>
      {modalCreateUser}
    </>
  );
}
