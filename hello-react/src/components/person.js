import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 200px;
  margin: 20px;
  padding: 10px;
  display: inline-block;
  text-align: center;
  border: 1px solid black;

  :hover{
    box-shadow: 0 5px 10px grey;
  }
`;

const Button = styled.button`
  margin: 30px;
`;

const Input = styled.input`
  width: 150px;
`;

const Person = (properties) => {
  return (
    <StyledDiv>
      <h3>{properties.name}</h3>
      <p>age: {properties.age}</p>
      <Input value={properties.name} onChange={properties.changedName} />
      <Button type="button" onClick={properties.clickDelete}>delete!</Button>
    </StyledDiv>
  )
}

export default Person;