import { Item } from 'components/Item/Item';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export function ContactList({ data, onDelete }) {
  return (
    <List>
      {data.length !== 0 ? (
        data.map(contact => (
          <Item
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
            id={contact.id}
          />
        ))
      ) : (
        <p>Nothing found</p>
      )}
    </List>
  );
}

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDelete: PropTypes.func,
    })
  ).isRequired,
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;
