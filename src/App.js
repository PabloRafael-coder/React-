
import Axios from 'axios';
import React, { useState, useRef } from 'react';
import Users from './assets/usuarios.webp';
import Arrow from './assets/arrow-right.svg';
import Trash from './assets/trash-2.svg'


import { Container, Image, ContainerItens, H1, Label, Input, Button, User } from './style'




const App = () => {

  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function userRegister() {
    const response = await Axios.post('http://localhost:3001/users', { name: inputName.current.value, age: inputAge.current.value });

    setUsers([...users, response.data])

    const newUsers = await Axios.get('http://localhost:3001/users');

    setUsers(newUsers.data);

    // setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }]);


  }

  function deleteUser(userId) {
    const newUser = users.filter(user => user.id !== userId);
    setUsers(newUser)

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

        <Button onClick={userRegister}>
          Cadastrar

          <Image src={Arrow} />
        </Button>

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
      </ContainerItens>
    </Container>
  );

}

export default App;