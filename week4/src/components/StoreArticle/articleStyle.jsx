import styled, { keyframes } from 'styled-components';
import { flexColumnCenter } from '../../mixxin';

const loading = keyframes`
0% {
    transform: translateX(0);
    }   
50%, 
100% {
    transform: translateX(46rem);
    }
`;

export const StyledRoot = styled.article`
  ${flexColumnCenter}
  width: 70%;
  height: auto;
  background-color: white;
  background-repeat: no-repeat;
  font-size: 1.5rem;
  margin: 2rem 0;

  .skeleton::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .skeleton {
    width: 30%;
    height: 3rem;
    position: relative;
    overflow: hidden;
    background-color: gray;
  }
`;

export const StoreName = styled.a`
  padding: 4rem;
  text-decoration: none;
`;

export const StoreAddress = styled.p`
  padding: 1rem;
`;

export const StorePhoneNumber = styled.p`
  padding: 1rem;
`;
