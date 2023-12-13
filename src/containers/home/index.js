
import Axios from 'axios';
import React, { useState, useRef } from 'react';
import Users from '../../assets/usuarios.webp';
import Arrow from '../../assets/arrow-right.svg';

import { useNavigate } from 'react-router-dom';


import { Container, Image, ContainerItens, H1, Label, Input, Button } from './style'


const App = () => {

  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  const navigate = useNavigate()


  async function userRegister() {
    const response = await Axios.post('http://localhost:3001/users', { name: inputName.current.value, age: inputAge.current.value });

    setUsers([...users, response.data])

      navigate('/usuarios')

  }

  return (
    <Container>
      <Image src={Users} width='300px' />
      <ContainerItens>
        <H1>
          Cadastramento de Usuários
        </H1>
        <Label for='name'>
          Nome:
        </Label>
        <Input ref={inputName} name='name' placeholder='Nome'>

        </Input>
        <Label for='idade'>
          Idade:
        </Label>
        <Input ref={inputAge} name='idade' placeholder='Idade'>

        </Input>

        <Button to='/usuarios' onClick={userRegister}>
          Cadastrar

          <Image src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );

}

export default App;