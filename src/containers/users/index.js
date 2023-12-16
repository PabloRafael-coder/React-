
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import People from '../../assets/usuarios.webp';
import Arrow from '../../assets/arrow-right.svg';
import Trash from '../../assets/trash-2.svg'

import { useNavigate } from 'react-router-dom';

import H1 from '../../components/title'

import ContainerItens from '../../components/ContainerItens';

import Button from '../../components/Button';

import { Container, Image, User } from './style'



const Users = () => {

  const navigate = useNavigate()

  console.log()

  function backPage() {
    navigate('/');
  };


  const [users, setUsers] = useState([]);


  useEffect(() => {

    async function updateInformation() {
      const newUsers = await Axios.get('http://localhost:3001/users');

      setUsers(newUsers.data);
    }

    updateInformation();

  }, [])

  async function deleteUser(userId) {
    await Axios.delete(`http://localhost:3001/users/${userId}`);
    const newUser = users.filter(user => user.id !== userId);
    setUsers(newUser)

  }

  return (
    <Container>
      <Image src={People} width='300px' />
      <ContainerItens>
        <H1 color={true}>
          Usuários Cadastrados
        </H1>

        <ul>
          {
            users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}><Image src={Trash} /></button>
              </User>
            ))
          }
        </ul>
        <Button onClick={backPage}>
          <Image src={Arrow} />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );

}

export default Users;