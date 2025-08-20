import { fireEvent, render , screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';


describe('Sidebar', () => {
    test('test render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

test('test toggle', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-onToggle');
    const sidebar = screen.getByTestId('sidebar');

    // Проверяем начальное состояние
    expect(sidebar).toHaveAttribute('data-collapsed', 'true');
    
    // Кликаем и проверяем изменение состояния
    fireEvent.click(toggleBtn);
    expect(sidebar).toHaveAttribute('data-collapsed', 'false');
    
    // Кликаем еще раз
    fireEvent.click(toggleBtn);
    expect(sidebar).toHaveAttribute('data-collapsed', 'true');
});
})
