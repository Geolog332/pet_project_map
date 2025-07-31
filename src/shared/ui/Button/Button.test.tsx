import { render , screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

jest.mock('./Button.module.scss', () => ({
    Button: 'Button',
    clear: 'clear',
}));

describe('Button', () => {
    test('test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with theme CLEAR', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
})
