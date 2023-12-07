import styled from "styled-components";
import Modal from 'react-modal';

export const UserContainer = styled.body`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2rem;

  gap: 12px;
`;

export const ModalContainer = styled(Modal)`
  background: #B0E0E6;
  border-radius: 30px;
  color: ${(props) => props.theme.secondary};
  width: 400px;
  padding: 3rem;
  text-align: center;
  border-bottom: 50px ${(props) => props.theme.secondary};
  
  h1 {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 20px
  }
`