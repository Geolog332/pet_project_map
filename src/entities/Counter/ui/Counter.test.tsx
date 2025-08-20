import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Правильный импорт
import { Counter } from './Counter';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}},
        });
        expect(screen.getByTestId('value-titel')).toHaveTextContent('10');
    });

    test('test increment', async () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}},
        });
        
        await userEvent.click(screen.getByTestId('increment-btn')); 
        expect(screen.getByTestId('value-titel')).toHaveTextContent('11');
    });

    test('test decrement', async () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}},
        });
        
        await userEvent.click(screen.getByTestId('decrement-btn')); 
        expect(screen.getByTestId('value-titel')).toHaveTextContent('9');
    });
});