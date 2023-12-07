import { useCallback, useMemo, useState } from "react";
import { Button } from "../Button";
import { ModalContainer } from "@/pages/users/styles";
import { UserForm } from "@/pages/users/components/UserForm";
import { Div } from "./styles";

interface DivProps {
  title: string;
  content: string;
  background?: string;
  buttonLabel: string;
}

export function DivFull({ title, content, background, buttonLabel }: DivProps) {
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
      <Div>
        <h1>{title}</h1>
        <div>
          <section>
            <img src={background} alt="" />
          </section>
          <section>
            <h2>{content}</h2>
            <Button
              label={buttonLabel}
              variant="primary"
              onClick={openModalCreateUser}
            ></Button>
          </section>
        </div>
      </Div>
      {modalCreateUser}
    </>
  );
}
