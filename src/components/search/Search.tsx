import React, { ChangeEvent, useMemo, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import variables, { COLORS } from '../../shared/variables/index';
import debounce from 'lodash.debounce';

/* May need to scope this and move to separate reusable file. */
const {
  ThemeColors: { input, funcs },
} = variables;

const StyledInput = styled.input`
  border: none;
  color: ${input.color};
  background-color: ${input.backgroundColor};
  flex-grow: 1;
  padding: 3px;
  border-radius: 4px;
  font-size: 1.2em;
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: ${funcs.GREY_ALPHA(0.75)};
  }
`;

const StyledForm = styled.form`
  border: solid 1px ${input.border};
`;

const StyledFontAwesomeIcon = styled.div`
  padding: 11px 8px 11px 13px;
  background-color: ${COLORS.WHITE};
  border-radius: 4px;
`;
/* End Styles */

export interface SearchProps {
  placeholderText: string;
  onChangeCallback?: (searchString: string) => void;
}

const Search = (props: SearchProps) => {
  const { placeholderText, onChangeCallback } = props;
  const [searchString, setSearchString] = useState('');

  const debouncedQueryCallback = useMemo(
    () =>
      debounce((queryString) => {
        if (onChangeCallback) onChangeCallback(queryString);
      }, 500),
    [onChangeCallback]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const str = event.target.value;
    setSearchString(str);
    debouncedQueryCallback(str);
  };

  const onSubmit = (event: React.FormEvent) => event.preventDefault();

  return (
    <StyledForm id='search-form' role='search' onSubmit={onSubmit}>
      <StyledFontAwesomeIcon>
        <FontAwesomeIcon
          icon={faSearch}
          style={{ color: variables.ThemeColors.input.icon }}
        />
      </StyledFontAwesomeIcon>
      <StyledInput
        type='text'
        placeholder={placeholderText}
        onChange={handleChange}
        value={searchString}
      />
    </StyledForm>
  );
};

export default Search;
