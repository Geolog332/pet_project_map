import { classNames } from './classNames';

describe('classNames', () => {
    test ( 'with only first parm', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test ( 'with first parm and additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test ( 'with first parm and mods and additional class', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    });

    test ( 'with first parm and mods (false) and additional class', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected);
    });

    test ( 'with first parm and mods (undefined) and additional class', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expected);
    });
})
