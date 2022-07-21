import { useState } from 'react';
import { Alert } from 'react-native';
import { VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native'
import fireStore from '@react-native-firebase/firestore'

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';


export function Register() {
    const [isLoading, setLoading] = useState(false);
    const [patrimony, setPatrimony] = useState('');
    const [description, setDescription] = useState('');

    const navigation = useNavigation();

    function handleNewOrderRegister() {
        if (!patrimony || !description) {
            return Alert.alert("Registrar", "Preencha todos os campos");
        }

        setLoading(true);

        fireStore()
            .collection('orders')
            .add({
                patrimony,
                description,
                status: 'open',
                created_at: fireStore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Solicitação", "Solicitação resgitrada com sucesso");
                navigation.goBack();
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                return Alert.alert("Solicitação", "Não foi possivel registrar o pedido");
            })
    }

    return (
        <VStack flex={1} p={6} bg="gray.600">
            <Header title='Solicitação' />

            <Input
                placeholder='Número do Patrimônio'
                mt={4}
                onChangeText={setPatrimony}
            />

            <Input
                placeholder='Descrição do problema'
                flex={1}
                multiline
                textAlignVertical='top'
                mt={5}
                onChangeText={setDescription}
            />

            <Button
                title='Enviar'
                mt={5}
                isLoading={isLoading}
                onPress={handleNewOrderRegister}
            />
        </VStack>
    );
}