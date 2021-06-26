import { useState, useEffect } from 'react';
import { ListUsers, FormUser, BoxUsers } from './styles/styles';
import dataUsers from './data/users.json';

const newUser = {
  name: '',
  cpf: '',
  bdate: '',
  uf: '',
  city: '',
};

export const List = () => {
  const [users, setUsers] = useState(dataUsers);
  const [user, setUser] = useState(newUser);
  const [ufs, setUfs] = useState();
  const [uf, setUf] = useState();
  const [citys, setCitys] = useState();

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(async (res) => {
      const json = await res.json();
      setUfs(json);
    });
  }, []);

  useEffect(() => {
    if (uf)
      fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      ).then(async (res) => {
        const json = await res.json();
        setCitys(json);
      });
  }, [uf]);

  const addUser = (e) => {
    e.preventDefault();
    let foundUser = false;
    if (users && users.length > 0) {
      console.log('user.cpf:', user.cpf);
      for (let i = 0; i < users.length; i++) {
        console.log('users[i].cpf:', users[i].cpf);
        console.log('user.cpf === users[i].cpf:', user.cpf === users[i].cpf);
        if (user.cpf === users[i].cpf) {
          users[i].name = user.name;
          users[i].cpf = user.cpf;
          users[i].bdate = user.bdate;
          users[i].uf = user.uf;
          users[i].city = user.city;
          setUsers([...users]);
          setUser(newUser);
          foundUser = true;
          break;
        }
      }
    }
    if (!foundUser) {
      const newUser = Object.assign({}, user);
      const newUserArray = [...users];
      console.log(newUserArray);
      newUserArray.push(newUser);
      setUsers(newUserArray);
      console.log(newUser);
      console.log(newUserArray);
    }
  };

  const selectRow = (e) => {
    const tr = e.target.parentElement.children;
    if (tr && tr.length === 8) {
      const selectedUser = {
        name: tr[0].innerHTML,
        cpf: tr[1].innerHTML,
        bdate: tr[2].innerHTML,
        uf: tr[3].innerHTML,
        city: tr[4].innerHTML,
      };
      document.getElementById('name').value = selectedUser.name;
      document.getElementById('cpf').value = selectedUser.cpf;
      document.getElementById('bdate').value = selectedUser.bdate;
      document.getElementById('uf').value = selectedUser.uf;
      document.getElementById('city').value = selectedUser.city;
      setUser(selectedUser);
    }
  };

  const handleChange = (e) => {
    const formUser = user;
    formUser[e.target.id] = e.target.value;
    setUser(formUser);
  };

  const changeUf = (e) => {
    setUf(e.target.value);
  };

  return (
    <BoxUsers>
      <FormUser name="formUser" onSubmit={addUser}>
        <div>
          <div>
            <div Style="width:65%">
              <label for="name">Nome Completo *</label>
              <input
                onChange={handleChange}
                id="name"
                type="text"
                name="name"
                Style="width:95%"
              />
            </div>
            <div Style="width:20%">
              <label>CPF *</label>
              <input
                onChange={handleChange}
                id="cpf"
                type="text"
                name="cpf"
                Style="width:80%"
              />
            </div>
            <div Style="width:15%">
              <label>Data de Nascimento *</label>
              <input
                onChange={handleChange}
                id="bdate"
                type="date"
                name="bdate"
                Style="width:90%"
              />
            </div>
          </div>
          <div>
            <div Style="width:40%">
              <label>Estado *</label>
              <select id="uf" name="uf" onChange={changeUf} Style="width:95%">
                {ufs &&
                  ufs.length > 0 &&
                  ufs.map((uf) => {
                    return <option value={uf.sigla}>{uf.nome}</option>;
                  })}
              </select>
            </div>
            <div Style="width:45%">
              <label>Cidade *</label>
              <select id="city" name="city" Style="width:95%">
                {citys &&
                  citys.length > 0 &&
                  citys.map((city) => {
                    return <option value={city.nome}>{city.nome}</option>;
                  })}
              </select>
            </div>
            <div Style="width: 15%">
              <button type="submit">
                <img src="icon-add.svg" alt="icon-add" />
                INCLUIR
              </button>
              {/* <input type="submit" value= Style="width:100%" /> */}
            </div>
          </div>
        </div>
      </FormUser>
      <ListUsers>
        <table>
          <tr>
            <th>NOME COMPLETO</th>
            <th>CPF</th>
            <th>DATA DE NASCIMENTO</th>
            <th>IDADE</th>
            <th>CIDADE</th>
            <th>ESTADO</th>
            <th>EDITAR</th>
            <th>EXCLUIR</th>
          </tr>
          {users &&
            users.length > 0 &&
            users.map((user, index) => {
              return (
                <tr key={index} onClick={selectRow}>
                  <td>{user.name}</td>
                  <td>{user.cpf}</td>
                  <td>{user.bdate}</td>
                  <td>XX</td>
                  <td>{user.city}</td>
                  <td>{user.uf}</td>
                  <td>
                    <div>
                      <img
                        src="icon-edit.svg"
                        alt="icon-edit"
                        height="18px"
                        width="15px"
                        id="iconEdit"
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <img
                        src="icon-delete.svg"
                        alt="icon-delete"
                        height="22px"
                        width="20px"
                        id="iconRemove"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
        </table>
      </ListUsers>
    </BoxUsers>
  );
};
export default List;
