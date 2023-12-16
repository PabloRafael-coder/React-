import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
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

    img {
        transform: rotateY(180deg);
    }
`;