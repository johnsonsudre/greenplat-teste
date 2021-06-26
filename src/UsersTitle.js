import { FormHeader, FormUserIcon, FormTitle } from './styles/styles';

export const UsersTitle = () => {
  return (
    <>
      <FormHeader>
        <FormUserIcon src="/icon-user.svg" />
        <FormTitle>
          <p>Cadastro de usuários</p>
          <span>* campos obrigatórios</span>
        </FormTitle>
      </FormHeader>
      <hr />
    </>
  );
};
export default UsersTitle;
