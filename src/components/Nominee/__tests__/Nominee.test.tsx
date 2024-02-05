import React from 'react';
import { screen } from '@testing-library/react';
import {render} from '../../../setupTests'
import Nominee from '../Nominee';

const nominee = {
        "title": "Vanessa Kirby for Pieces of a Woman",
        "photoUrL": "https://variety.com/wp-content/uploads/2020/12/pieces_of_a_woman.jpg",
        "id": "vanessa-kirby"
    }

const categoryId = 'best-actress';

describe('Nominee Component', () => {
    it('renders properly', () => {
        render(<Nominee nominee={nominee} categoryId={categoryId} />);
        expect(screen.getByText('Vanessa Kirby for Pieces of a Woman')).toBeInTheDocument();
        expect(screen.getByText('Select')).toBeInTheDocument();
    });
});
