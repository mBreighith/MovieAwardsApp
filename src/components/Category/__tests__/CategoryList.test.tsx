import { screen } from '@testing-library/react';
import {render} from '../../../setupTests'
import CategoryList from '../CategoryList';

describe('CategoryList Component', () => {
    test('renders CategoryList component', () => {
        render(<CategoryList />);
        expect(screen.getByText('Submit Ballot Data')).toBeInTheDocument();
    });

    test('Submit Button is there', () => {
        render(<CategoryList />);
        expect(screen.getByText('Submit Ballot Data')).toBeInTheDocument();
    });

});

