import styled from 'styled-components';

const buttonPadding = {
    'small': '4px 10px',
    'normal': '7px 17px',
    'large': '12px 70px',
};

const fontSize = {
    'small': '0.9rem',
    'normal': '1rem',
    'large': '1.1rem',
};

const buttonColors = {
    red: `
        color: #fff;
        background: #e8222c;
        transition: background .2s ease-in-out;
        &:hover {
            background: #f40612;
        }
        &:active {
            background: #a01a20;
        }
    `,
    gray: `
        color: #fff;
        background-color: #3c3c3c;
        &:hover {
            background: #525252;
        }
        &:active {
            background: #292929;
        }
    `
};

const StyledButton = styled.button`
    padding: ${(props) => buttonPadding[props.size]};
    font-size: ${(props) => fontSize[props.size]};
    text-decoration: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
    transition: background .2s ease-in-out;
    ${(props) => buttonColors[props.color]}
`;

export default StyledButton;