import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  newContact = data => {
    const { contacts } = this.state;
    contacts.some(contacts => contacts.name === data.name)
      ? window.alert(data.name + ' is alredy in contacts')
      : this.setState(prevState => {
          return {
            contacts: [data, ...prevState.contacts],
          };
        });
  };

  handleFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    const normolizedFiltredData = this.state.filter.toLowerCase();
    const filtredData = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFiltredData)
    );

    return (
      <>
        <h1>PhoneBook</h1>
        <ContactForm stateChange={this.newContact} />
        <h1>Contacts</h1>
        <Filter onFilter={this.handleFilter} />
        <ContactList data={filtredData} deleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
