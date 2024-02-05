import React from 'react';
import styled from 'styled-components';
import Nominee from '../Nominee/Nominee';
import {NomineeType} from "../../types/types";

interface NomineeListProps {
    nominees: NomineeType[];
    categoryId: string;
}

const NomineeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const NomineeList = ({ nominees, categoryId }: NomineeListProps) => {
    return (
        <NomineeListContainer>
            {nominees.map((nominee: any) => (
                <Nominee
                    key={nominee.id}
                    nominee={nominee}
                    categoryId={categoryId}
                />
            ))}
        </NomineeListContainer>
    );
};

export default NomineeList;
