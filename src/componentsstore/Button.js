import styled from 'styled-components';


export const ButtonContainer = styled.button`
  text-transform: capitalize; 
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props => props.addToCartNapinPROPDetailsjsFilestaButtonjsFileen ? "var(--mainYellow)"  :  "var(--lightBlue)"};
  // color: var(--lightBlue);
  color: ${prop => prop.addToCartNapinPROPDetailsjsFilestaButtonjsFileen ? "var(--mainYellow)"  :  "var(--lightBlue)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2 rem 0.5.rem 0.2 rem 0 rem;
  transition: all 0.5s ease-in-out;
 &:hover{
      // background: var(--lightBlue);
      background: ${prop => prop.addToCartNapinPROPDetailsjsFilestaButtonjsFileen ? "var(--mainYellow)"  :  "var(--lightBlue)"};
      color: var(--mainBlue);
 }
 &:focus{
     outline: none;
 }
`

// Huom. tätä Button-js file mahdollistaa monta nappia, eri nimillä, just change nimi ButtonContainer -> joksikin muuksi

// Note: 1 rem = 16px, mutta rem ei forcaa absoluuttisia pixeleitä vaan mukautuu ympäristöönsä