import React from 'react';
import SearchResultMessage from '../SearchResultMessage/SearchResultMessage';
import {
    StatusBar,
    StatusBarWrapper
} from '../../../../common/components/StatusBar/StatusBar.styles';
import RadioValues from '../../../../common/components/RadioValues/RadioValues';

const sortByLabel = 'Sort by';
const sortByValues = [{
    label: 'release date',
    value: 'date'
}, {
    label: 'rating',
    value: 'rating'
}];

const SearchStatusBar = () =>
    <StatusBar>
        <StatusBarWrapper>
            <SearchResultMessage result={7}/>
            <RadioValues
                label={sortByLabel}
                values={sortByValues}
                buttonType='link'
                active='date'/>
        </StatusBarWrapper>
    </StatusBar>;

export default SearchStatusBar;