import React from 'react';
import Users from './assets/usuarios.webp';
import Arrow from './assets/arrow-right.svg';
import Trash from './assets/trash-2.svg'

import { Container, Image, ContainerItens, H1, Label, Input, Button, User } from './style'



const App = () => {

  const users = [
    { id: Math.random(), name: 'Pablo', age: 23 },
    { id: Math.random(), name: 'Rafael', age: 30 },
  ];

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
        <Input name='name' placeholder='Nome'>

        </Input>
        <Label for='idade'>
          Idade:
        </Label>
        <Input name='idade' placeholder='Idade'>

        </Input>

        <Button >
          Cadastrar

          <Image src={Arrow} />
        </Button>

        <ul>
          {
            users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <Image src={Trash}/>
              </User>
            ))
          }
        </ul>
      </ContainerItens>
    </Container>
  );

}

export default App;