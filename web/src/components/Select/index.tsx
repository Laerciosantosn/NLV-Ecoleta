import React, {
  SelectHTMLAttributes,
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { useField } from '@unform/core';

import { IconBaseProps } from 'react-icons';

import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Select: React.FC<SelectProps> = ({
  name,
  icon: Icon,
  children,
  ...rest
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleSelectFocused = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleSelectBlur = useCallback(() => {
    setIsFocused(false);

    if (selectRef.current?.selectedIndex === 0) {
      setIsFilled(false);
    } else {
      setIsFilled(true);
    }
  }, []);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}

      <select
        defaultValue={defaultValue}
        onFocus={handleSelectFocused}
        onBlur={handleSelectBlur}
        ref={selectRef}
        {...rest}
      >
        {children}
      </select>
      {error && (
        <Error title={error}>
          <FiAlertCircle />
        </Error>
      )}
    </Container>
  );
};

export default Select;
