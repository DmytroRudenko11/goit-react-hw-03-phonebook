import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { SearchField } from './SearchField/SearchField';
import { INITIAL_LIST } from 'initalData/initialData';
import styled from 'styled-components';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const prevSessionData = JSON.parse(localStorage.getItem('contacts'));

    if (prevSessionData !== null) {
      this.setState({
        contacts: prevSessionData,
      });
      return;
    }
    this.setState(prevState => ({
      ...prevState.contacts,
      contacts: INITIAL_LIST,
    }));
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleMatch = name => {
    const arrayOfNames = this.state.contacts.map(({ name }) => name);
    return arrayOfNames.includes(name);
  };

  handleSubmit = name => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, name],
    }));
  };

  handleSearchField = name => {
    this.setState(prevState => ({ ...prevState.filter, filter: name }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  applyFilter = () => {
    return this.state.contacts.filter(user =>
      user.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <Wrapper>
        <AppHeader>Phonebook</AppHeader>
        <Form
          onSubmit={this.handleSubmit}
          onMatch={this.handleMatch}
          contacts={this.state.contacts}
        />
        <ListHeader>Contacts</ListHeader>
        <SearchField onSearch={this.handleSearchField} />
        <ContactList
          onSearch={this.handleSearchField}
          data={this.applyFilter()}
          onDelete={this.handleDelete}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 15px;
`;

const ListHeader = styled.h2`
  text-align: center;
`;

const AppHeader = styled.h1`
  text-align: center;
`;
