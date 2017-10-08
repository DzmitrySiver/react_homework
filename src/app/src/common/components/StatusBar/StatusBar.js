import React from 'react';
import {
    StatusBar,
    StatusBarWrapper
} from './StatusBar.styles';

const StatusBar = ({children}) =>
    <StatusBar>
        <StatusBarWrapper>
            {children}
        </StatusBarWrapper>
    </StatusBar>;

export default StatusBar;