import TodoList from 'components/todoList/todoList';

import { Container, Header, SearchForm, Section } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
