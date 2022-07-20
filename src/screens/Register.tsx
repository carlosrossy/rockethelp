import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
    return (
        <VStack flex={1} p={6} bg="gray.600">
            <Header title='Nova Solicitação' />

            <Input
                placeholder='Número do Patrimônio'
                mt={4}
            />

            <Input
                placeholder='Descrição do problema'
                flex={1}
                multiline
                textAlignVertical='top'
                mt={5}
            />

            <Button
                title='Enviar'
                mt={5}
            />
        </VStack>
    );
}