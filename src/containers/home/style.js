import styled from 'styled-components';




export const Container = styled.div`
    background-color: gainsboro;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

`;

export const Image = styled.img`
`;

export const Label = styled.label`
    font-size: 20px;
    letter-spacing: 0.5px;
    font-weight: 700;
`;

export const Input = styled.input`
    max-width: 70%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    background-color: gainsboro;

`;

export const Button = styled.button`
    width: 40%;
    font-size: 16px;
    font-weight: 700;
    background-color: rgb(115,103,240);
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        opacity: 0.8;
    }
`;

