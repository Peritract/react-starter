import NotePad from '.';
import { screen } from '@testing-library/react';

describe('NotePad', () => {
    test('it loads with one welcome message', () => {
        renderWithProviders(<NotePad />)
        const message = screen.getByText(/welcome/i)
        expect(message).toBeInTheDocument()
    })
})