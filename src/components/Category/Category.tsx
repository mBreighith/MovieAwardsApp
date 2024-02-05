import React, {useState} from 'react';
import styled from 'styled-components';
import NomineeList from '../Nominee/NomineeList';
import {NomineeType} from '../../types/types';
import {RootState} from  '../../redux/store'
import {useSelector} from 'react-redux';

interface CategoryProps {
    categoryId: string;
    nominees: NomineeType[];
    title: string;
}

interface CategoryContainerProps {
    hasSelection: boolean;
}

const CategoryContainer = styled.div<CategoryContainerProps>`
  h2 {
    background-color: grey;
    margin: 10px;
    padding: 10px;
    color: ${({ hasSelection }) => (hasSelection ? '#fad20c' : '#fff')};;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  
  .dropdown-icon {
    font-size: 40px;
    align-self: self-end;
  } 

  .collapsed {
    transform: rotate(-90deg);
  }
`;

export const Category = ({ categoryId, nominees, title }: CategoryProps) => {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const selectedNominees = useSelector((state:RootState) => state.nominee.selectedNominees);
    const hasSelection = !!selectedNominees[categoryId];

    const toggleContentVisibility = () => {
        setIsContentVisible((prevIsContentVisible) => !prevIsContentVisible);
    };

    return (
        <CategoryContainer hasSelection={hasSelection}>
            <h2 onClick={toggleContentVisibility} >
                {title}
                <span className={`dropdown-icon ${isContentVisible ? '' : 'collapsed'}`}>&#9662;</span>
            </h2>
            {isContentVisible && <NomineeList nominees={nominees} categoryId={categoryId} />}
        </CategoryContainer>
    );
};
