import React from 'react';
import { screen } from '@testing-library/react';
import {render} from '../../../../setupTests'
import { ResultsModal } from '../ResultsModal';

describe('ResultsModal Component', () => {
    it('renders modals', () => {
        render(<ResultsModal isOpen={true} onClose={() => {}} />);
        expect(screen.getByText('SUCCESS')).toBeInTheDocument();
    });

    it('does not render when isOpen is false', () => {
        render(<ResultsModal isOpen={false} onClose={() => {}} />);
        expect(screen.queryByText('SUCCESS')).toBeNull();
    });
});
