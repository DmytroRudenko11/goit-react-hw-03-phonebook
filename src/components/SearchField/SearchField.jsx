import styled from 'styled-components';
import PropTypes from 'prop-types';

export function SearchField({ onSearch, filter }) {
  function onSearchInput(e) {
    onSearch(e.target.value);
  }
  return (
    <SearchBox>
      <LabelForm>
        Find contacts by name
        <InputForm
          type="text"
          name="name"
          value={filter}
          onChange={onSearchInput}
        />
      </LabelForm>
    </SearchBox>
  );
}

SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  padding-bottom: 0;
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
