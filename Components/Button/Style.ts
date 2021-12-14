import styled from 'styled-components';
import Config from '../../Constants/Config.json';

export const Positioner = styled.div`
    width: 100%;
    height: 100%;
`;

export const Button = styled.button`
    width: 33.3%;
    height: 5%;
    border-radius: 5.5rem;
    border: none;
    font-size: 2.5rem;
    font-weight: bold;
    background-color: ${Config.COLOR.BLUE};
    color: ${Config.COLOR.WHITE};
`;