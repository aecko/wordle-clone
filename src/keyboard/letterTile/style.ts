import styled from "styled-components";

export const LetterTileContainer = styled.button`
  padding: 0.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #2874a6;
  }
`;
