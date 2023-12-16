import styled from "styled-components";

export const H1 = styled.h1`

    text-transform: uppercase;

    ${(props) => props.color && `
        color: silver;
    `}
`;