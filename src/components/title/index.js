import React from 'react';
import { H1 } from './style';

    function title ({children, color}) {
        return <H1 color={color}>{children}</H1>;
    };

export default title;