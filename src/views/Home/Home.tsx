import React from 'react';
import styled from 'styled-components';
import CategoryList from '../../components/Category/CategoryList';

const Title = styled.h1`
    text-align: center;
`;

const Home = () => {
    return (
        <div>
            <Title style={{textAlign: 'center'}}>Movie Awards</Title>
            <CategoryList />
        </div>
    );
};

export default Home;
