import React from 'react';
import { InputGroup } from "@blueprintjs/core"
import { IconNames } from "@blueprintjs/icons";

interface Props {
  onChange: (value: string) => void
}

const Search: React.FC<Props> = ({ onChange }) => (
  <InputGroup
    leftIcon={IconNames.SEARCH}
    placeholder="Поиск..."
    large
    onChange={(event) => onChange(event.target.value)}
  />
)

export default Search;
