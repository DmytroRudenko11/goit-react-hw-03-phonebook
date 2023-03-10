import { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    id: null,
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.onMatch(this.state.name)) {
      this.setState({
        id: null,
        name: '',
        number: '',
      });
      return alert(`${this.state.name} is alreadry in your contacts list`);
    }

    this.props.onSubmit(this.state);

    this.setState({
      id: null,
      name: '',
      number: '',
    });
  };

  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value, id: nanoid() });
  };

  render() {
    const { number, name } = this.state;
    return (
      <AppForm onSubmit={this.handleSubmit}>
        <LabelForm>
          Name
          <InputForm
            onChange={this.handleChangeInput}
            type="text"
            placeholder="Add your contact"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelForm>

        <LabelForm>
          Number
          <InputForm
            onChange={this.handleChangeInput}
            value={number}
            type="tel"
            placeholder="Add number of your contact"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelForm>
        <SubmitButton>Add contact</SubmitButton>
      </AppForm>
    );
  }
}

Form.propTypes = {
  onMatch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const AppForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;

const InputForm = styled.input`
  width: 418px;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const LabelForm = styled.label`
  font-size: 14px;
`;

const SubmitButton = styled.button`
  width: 100%;
  margin: 0 auto;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
