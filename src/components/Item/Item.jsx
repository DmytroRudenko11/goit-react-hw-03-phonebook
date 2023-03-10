import styled from 'styled-components';
import PropTypes from 'prop-types';

export function Item({ name, number, onDelete, id }) {
  return (
    <ContactItem>
      <ContactText>
        {name}: {number}
      </ContactText>
      <ContactButton onClick={() => onDelete(id)} type="button">
        Delete
      </ContactButton>
    </ContactItem>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const ContactItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dotted #4caf50;
`;

const ContactText = styled.p`
  font-size: 14px;
`;

const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 25px;
  background-color: #c21807;
  color: white;

  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff2400;
  }
`;
