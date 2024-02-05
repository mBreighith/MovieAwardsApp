import React from 'react';
import { screen } from '@testing-library/react';
import {render} from '../../../setupTests'
import { Category } from '../Category';

const items = [
     {
        "id": "best-actress",
        "items": [
            {
                "title": "Vanessa Kirby for Pieces of a Woman",
                "photoUrL": "https://variety.com/wp-content/uploads/2020/12/pieces_of_a_woman.jpg",
                "id": "vanessa-kirby"
            },
            {
                "title": "Frances McDormand for Nomadland",
                "photoUrL": "https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg",
                "id": "frances-mcdormand"
            },
            {
                "title": "Carey Mulligan for Promising Young Woman",
                "photoUrL": "https://variety.com/wp-content/uploads/2020/12/promising_young_woman_ver2.jpg",
                "id": "carey-mulligan"
            },
            {
                "title": "Viola Davis for Ma Rainey's Black Bottom",
                "photoUrL": "https://variety.com/wp-content/uploads/2020/12/ma_raineys_black_bottom.jpg",
                "id": "viola-davis"
            },
            {
                "title": "Meryl Streep for The Prom",
                "photoUrL": "https://variety.com/wp-content/uploads/2020/12/prom_ver2.jpg",
                "id": "meryl-streep"
            }
        ],
        "title": "Best Actress"
    },
]

describe('Category Component', () => {
    it('renders category title', () => {
        const categoryId = items[0].id;
        const title = items[0].title;

        const nominees = [
            items[0].items[0], items[0].items[1]
        ];

        render(<Category categoryId={categoryId} nominees={nominees} title={title} />);
        expect(screen.getByText(title)).toBeInTheDocument();
    });
});
