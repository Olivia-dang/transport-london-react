import BikePointList from './BikePointList';
import { render, screen } from '@testing-library/react';
import { StaticRouter as Router } from 'react-router-dom'; 

describe('ProducBikePointListtList', () => {
    it('should show "loading..."', () => {
        render(<Router><BikePointList/></Router>);
        const text = screen.getByText(/loading/i);
        expect(text).toBeInTheDocument();
    });

    it('should show the bike point list', () => {
        const bikePointList = [
            { id: 1, commonName: 'Chelsea', lon: 6.66, lat: 7.77 },
            { id: 2, commonName: 'New York', lon: 7.77, lat: 8.88 },
        ];
        render(<Router><BikePointList bikePointList={bikePointList}/></Router>);
        const table = screen.getByRole('table');
        expect(table).toHaveTextContent(/Chelsea/);
        expect(table).toHaveTextContent(/New York/);
        // screen.debug();
    })
});