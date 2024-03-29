import React, { useState, useEffect } from "react"; // REACT HOOK-(useState)(useRef)
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import Avatar from "../../assets/inform.svg";
import Arrow from "../../assets/arrow.png";
import Trash from "../../assets/trash.png";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import {
  Container,
  Image,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  // REACT HOOK => useEffect( efeito colateral)
  // a minha aplicação inicia ( a pagina carreigou, useeffect é chamado)
  // quando um estado que está no array de dependencia do useEffect é alterado

  const minhaUrl = "https://first-project-node-liard.vercel.app"

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get(`${minhaUrl}/users`);

      setUsers(newUsers);
    };

    fetchUsers()
  }, [])


  async function deleteUser(userId) {
    await axios.delete(`${minhaUrl}/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />

      <ContainerItens isBlur={true}>
        <H1>Usuários!</H1>

        <ul>
          {
            users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}>
                  <img src={Trash} alt="lata-de-lixo" />
                </button>
              </User>
            ))
          }
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} />
          Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default Users;