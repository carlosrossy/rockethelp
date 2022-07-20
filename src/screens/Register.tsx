import { VStack } from 'native-base';

import { Header } from '../components/Header';

export function Register() {
    return (
        <VStack flex={1} pb={6} bg="gray.600">
            <Header title='Nova Solicitação' />
        </VStack>
    );
}