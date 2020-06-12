import React, {
  SelectHTMLAttributes,
  useRef,
  useState,
  useCallback,
} from 'react';

import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Select: React.FC<SelectProps> = ({ icon: Icon, children, ...rest }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleSelectFocused = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleSelectBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!selectRef.current?.selectedOptions);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}

      <select
        onFocus={handleSelectFocused}
        onBlur={handleSelectBlur}
        ref={selectRef}
        {...rest}
      >
        {children}
      </select>
    </Container>
  );
};

export default Select;
