const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const React = require('react');
const { render, screen } = require('@testing-library/react');
const { MemoryRouter } = require('react-router-dom');
const Navbar = require('./navbar').default;
require('@testing-library/jest-dom');

// Mock global fetch for dynamic pages call
beforeAll(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve([]),
        })
    );
});

describe('Navbar Component Render Tests', () => {
    test('renders the logo and basic links properly', () => {
        render(
            React.createElement(
                MemoryRouter,
                null,
                React.createElement(Navbar, null)
            )
        );

        // Verify logo rendering
        const logoImg = screen.getByAltText(/Nivara Logo/i);
        expect(logoImg).toBeInTheDocument();

        // Verify key link rendering
        expect(screen.getByText(/^Home$/i)).toBeInTheDocument();
        expect(screen.getByText(/^Careers$/i)).toBeInTheDocument();
    });
});
