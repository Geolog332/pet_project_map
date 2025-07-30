import { Button } from 'shared/ui/Button/Button';
import { useState } from 'react';

// компонент для тестирования errorBoundary
export const BugButton = () => {
    const [shouldThrow, setShouldThrow] = useState(false);

    if (shouldThrow) {
        throw new Error('Test error');
    }

    const onClick = () => {
        setShouldThrow(true);
    };

    return (
        <Button onClick={onClick}>
            throw error
        </Button>
    );
};