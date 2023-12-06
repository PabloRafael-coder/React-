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

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    width: 50%;
    background-color: rgb(254,254,255);
    border-radius: 10px;
    gap: 10px;
    padding: 50px 36px;
`;

export const H1 = styled.h1`
    text-transform: uppercase;
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

    &:hover {
        opacity: 0.8;
    }
`;

export const User = styled.li`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 70%;
    padding: 10px;
    margin-top: 20px;

    font-size: 16px;

    border: none;
    border-radius: 5px;

    background-color: gainsboro;

    p {
        font-size: 16px;
        font-weight: 700;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
}
`;