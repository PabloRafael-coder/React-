import styled from "styled-components";

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    width: 50%;
    background-color: rgb(254,254,255);
    border-radius: 10px;
    gap: 10px;
    padding: 50px 36px;

    ${(props) => props.container && `
    
    background-color: silver;
    
    
    `}
`;