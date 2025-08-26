import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    }

    return (
        <div>
            Главная страница
            <Input 
                placeholder="Введите что-нибудь"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default MainPage;
