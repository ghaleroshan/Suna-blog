import styled, { keyframes } from 'styled-components';

const Rotation = keyframes`
  from{
    transform: rotate(0 deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #e67e22;
  margin: 10px auto;
  border-top: none;
  border-right: none;
  animation: ${Rotation} 1s linear infinite;
`;
