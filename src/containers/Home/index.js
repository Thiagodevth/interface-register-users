import React, { useState, useRef } from "react"; // REACT HOOK-(useState)(useRef)
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import People from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.png";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const inputName = useRef();
  const inputAge = useRef();

  const minhaUrl = "https://first-project-node-liard.vercel.app"

  async function addNewUser() {
    const { data: newUser } = await axios.post(`${minhaUrl}/users`, {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]); // SPREAD OPERATOR(...)

    navigate("/usuarios");
  }; 


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default App;