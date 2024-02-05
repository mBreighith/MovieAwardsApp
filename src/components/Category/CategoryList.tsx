import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Category }  from './Category'
import { NomineesCategory } from '../../types/types';
import { getBallotData } from '../../APIs/getBallot';
import {useSelector} from 'react-redux';
import {RootState} from "../../redux/store";
import {ResultsModal} from '../Results/Modals/ResultsModal'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryListContainer = styled.div`
  margin: 20px 10%;
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
  padding: 10px;
  align-self: center;
  background-color: ${({ disabled }) => (disabled ? '#ece4d0' : '#bf9001')};;
  color: #fff;
  border: none;
`;


const CategoryList = () => {
    const [nomineesCategories, setNomineesCategories] = useState<NomineesCategory[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    const selectedNominees = useSelector((state: RootState) => state.nominee.selectedNominees)
    console.log('selectedNominees', selectedNominees)
    useEffect(() => {
        const fetchBallotData = async () => {
            try {
                const data = await getBallotData();
                setNomineesCategories(data.items);
            } catch (err) {
                console.error(err)
            }
        };

        fetchBallotData();
    }, []);


    const isSubmitButtonDisabled = () => {
        return !nomineesCategories.every((category) => selectedNominees[category.id]);
    };

    const toggleResultsModal = () => {
        setShowModal(!showModal)
    }

    return (
        <Container>
            <CategoryListContainer>
                {nomineesCategories.map((category) => (
                    <Category
                        key={category.id}
                        categoryId={category.id}
                        nominees={category.items}
                        title={category.title}
                    />
                ))}
            </CategoryListContainer>

            <SubmitButton disabled={isSubmitButtonDisabled()} onClick={toggleResultsModal}>
                Submit Ballot Data
            </SubmitButton>
            {showModal && <ResultsModal isOpen={showModal} onClose={() => setShowModal(false)}/>}
        </Container>

);
};

export default CategoryList;
