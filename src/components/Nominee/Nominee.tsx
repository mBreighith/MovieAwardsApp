import React from 'react';
import styled from 'styled-components';
import { NomineeType } from '../../types/types';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../../redux/store'
import {selectNominee} from '../../redux/slices/nomineeSlice'

interface NomineeCardProps {
    nominee: NomineeType;
    categoryId: string;
    // onSelect: () => void;
    // isSelected: boolean;
}

const NomineeCardContainer = styled.div<{ isSelected: boolean }>`
  position: relative;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  //cursor: pointer;
  box-sizing: border-box;
  background-color: ${({ isSelected }) => (isSelected ? '#fad20c' : '#cfe2f3')};
  width: calc(33.33% - 20px);
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#fad20c' : '#bdd8ef')};
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 20px);
  }
`;

const NomineeTitle = styled.h4`
  text-align: center;
`;

const NomineeImage = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const SelectButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background-color: #9e9794;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #8d8784;
  }
`;

const Nominee = ({ nominee, categoryId }: NomineeCardProps) => {
    const dispatch = useDispatch();
    const selectedNominees = useSelector((state: RootState) => state.nominee.selectedNominees)
    const handleSelect = () => {
        dispatch(selectNominee({categoryId, nomineeId: nominee.id}))
    };

    const isSelectedNominee = selectedNominees[categoryId] === nominee.id
    return (
        <NomineeCardContainer isSelected={isSelectedNominee}>
            <NomineeTitle>{nominee.title}</NomineeTitle>
            <NomineeImage
                src={nominee.photoUrL}
            />
            <SelectButton onClick={handleSelect}>{isSelectedNominee? 'Selected' : 'Select'}</SelectButton>
        </NomineeCardContainer>
    );
};

export default Nominee;
