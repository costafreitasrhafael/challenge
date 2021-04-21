import React from 'react';

import { BiChevronDown } from 'react-icons/bi';
import { Container, SelectBox } from './styles';

interface SelectProps {
  options: {
    value: number | string;
    title: string;
  }[];
  color: string;
  background: string;
  border?: string;
  selectFunction: (value: string) => void;
  defaultValue?: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  color,
  background,
  border,
  selectFunction,
  defaultValue,
  disabled,
}) => {
  return (
    <Container>
      <SelectBox
        onChange={e => selectFunction(e.currentTarget.value)}
        background={background}
        color={color}
        border={border}
        value={defaultValue}
        disabled={disabled}
      >
        {options.map(({ value, title }) => (
          <option key={`${value}${Math.random()}`} value={value}>
            {title}
          </option>
        ))}
      </SelectBox>
      <BiChevronDown className="arrow" />
    </Container>
  );
};

export default Select;
