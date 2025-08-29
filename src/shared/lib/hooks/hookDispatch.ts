import { StateSchema } from 'app/providers/StoreProvider'
import { AppDispatch } from 'app/providers/StoreProvider/Config/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'


// Создаем типизированные версии хуков
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector