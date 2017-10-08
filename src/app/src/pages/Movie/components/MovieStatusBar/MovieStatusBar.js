import React from 'react';
import {
    StatusBar,
    StatusBarWrapper
} from '../../../../common/components/StatusBar/StatusBar.styles';
import MoviesBy from '../MoviesBy/MoviesBy';

const SearchStatusBar = () =>
    <StatusBar>
        <StatusBarWrapper>
            <MoviesBy director='Quentin Tarantino'/>
        </StatusBarWrapper>
    </StatusBar>;

export default SearchStatusBar;