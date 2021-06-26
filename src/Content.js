import UsersTitle from './UsersTitle.js';
import List from './List.js';
import { ContentApp } from './styles/styles';

export const Content = () => {
  return (
    <>
      <ContentApp>
        <UsersTitle />
        <List />
      </ContentApp>
    </>
  );
};

export default Content;
