import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { useCallback, useMemo, useState } from "react";
import { ContentContainer, ModalContainer } from "../users/styles";
import { UserForm } from "../users/components/UserForm";
import Loading from "@/components/Input/Loading";
import { DivFull } from "@/components/Div";
import { Footer } from "@/components/Footer";
import { Partners } from "@/components/Partners";
import { H1Partners } from "@/components/Partners/styles";

export default function Home() {
  const [isModalCreateUserOpen, setIsModalCreateUserOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <DivFull
            title="Conheça nossa plataforma"
            content="Já pensou em ter todos os seus dados em um só lugar? 
            Venha conhecer a maior plataforma analytics da América latina"
            background="https://static.wixstatic.com/media/f8a472_6bc92d38d45e48fe9df6e9cce1bbf245~mv2.png/v1/fill/w_640,h_286,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f8a472_6bc92d38d45e48fe9df6e9cce1bbf245~mv2.png"
            buttonLabel="Faça um teste grátis"
          />
          <DivFull
            title="Centralize o faturamento, defina suas metas"
            content="Tenha uma visão completa das suas operações financeiras 
            e estabeleça metas claras para impulsionar o crescimento e o sucesso da sua empresa"
            background="https://assets-global.website-files.com/618d2912818669913e63c92e/643d7ee6a29d562b899f4a6e_slide1.png"
            buttonLabel="Faça um teste grátis"
          />
          <DivFull
            title="Relatórios rápidos com uma poderosa ferramenta de criação"
            content="Obtenha insights valiosos e compartilhe informações estratégicas
             com sua equipe de maneira clara e concisa. Personalize seus relatórios,
             escolha entre uma variedade de gráficos e visualize seus dados de maneira intuitiva."
            background="https://www.acending.com/upload/thumbs_550//upload/produtos/Foto-1-ok.png"
            buttonLabel="Faça um teste grátis"
          />
          <DivFull
            title="Centralize o faturamento, defina suas metas"
            content="Tenha uma visão completa das suas operações financeiras 
            e estabeleça metas claras para impulsionar o crescimento e o sucesso da sua empresa"
            background="https://assets-global.website-files.com/618d2912818669913e63c92e/643d7eedd3d6db360e385714_slide3.png"
            buttonLabel="Faça um teste grátis"
          />
          <DivFull
            title="Acesse as Informações da sua empresa de qualquer lugar"
            content="O BIMachine não necessita instalação, basta ter acesso à internet. 
            Tenha liberdade para explorar seus dados e criar insights de forma conveniente,
             a qualquer momento e em qualquer dispositivo."
            background="https://support.bimachine.com/wp-content/uploads/2023/05/460c3a88-4afd-41c3-8886-250031272b43.png"
            buttonLabel="Faça um teste grátis"
          />
          <div>
            <H1Partners id="aux">Veja alguns de nossos parceiros</H1Partners>
            <Partners img="https://signup2.bimachine.com/assets/Minu-ec47d19d.png"></Partners>
            <Partners img="https://signup2.bimachine.com/assets/Intercity-300a6107.png"></Partners>
            <Partners img="https://signup2.bimachine.com/assets/Pompeia-59f6fb31.png"></Partners>
            <Partners img="https://signup2.bimachine.com/assets/Unimed-351d9436.png"></Partners>
            <Partners img="https://signup2.bimachine.com/assets/John_Deere-90e5d631.png"></Partners>
          </div>
          <Footer />
        </>
      )}
      {modalCreateUser}
    </>
  );
}
