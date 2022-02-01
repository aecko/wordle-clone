import styled from "styled-components";
import { colours } from "../../util/theme/colors";

export const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: #000;
  color: #fff;
  padding: 1rem 1rem;
`;

export const RetryButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${colours.green};
  color: #fff;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colours.greenDark};
  }
`;
