import React, { useCallback, useState } from 'react';
import { Container, Error } from './styled'

const Input = ({ type, name, placeholder, icon: Icon, setState, value, error, iconError: IconError }) => {

  const [focus, setFocus] = useState(false);
  const [filled, setFilled] = useState(false);

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleBlur = useCallback((e) => {
    setFocus(false);
    setFilled(!!e.target?.value);
  }, []);

  const handleChange = useCallback((e) => {
    setState(e.target.value);
  }, []);

  return (
    <Container error={error} filled={filled} focus={focus}>
      <Icon size="20" />
      <input value={value} type={type} name={name} placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}>
      </input>
      { error &&
          <Error>
            <IconError color="#c53030" size="20" />
            <span>{error}</span>
          </Error>
      }
    </Container>
  );
}

export default Input;