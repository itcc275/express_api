import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../../src/components/Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

beforeEach(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
        matches: true, // force mobile for all queries
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }));
});

it('should render the header with the correct title', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    const title = screen.getByRole('heading', { name: 'Adhunik Radio' });
    expect(title).toBeInTheDocument();
});

it('should render the logo image', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining('/logo.jpg'));
});

test('should open drawer in mobile view', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );

    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    expect(screen.getByText('Menu')).toBeInTheDocument();
});
