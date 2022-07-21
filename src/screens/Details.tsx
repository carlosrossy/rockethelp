import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { VStack, Text, useTheme, HStack, ScrollView, Box } from 'native-base';
import fireStore from '@react-native-firebase/firestore'
import { useNavigation, useRoute } from '@react-navigation/native';
import { OrderFirestoreDTO } from '../DTOs/OrderFirestoreDTO';
import { CircleWavyCheck, Hourglass, DesktopTower, ClipboardText } from 'phosphor-react-native'

import { dateFormat } from '../utils/firestoreDateFormats';

import { Header } from '../components/Header';
import { OrderProps } from '../components/Order';
import { Loading } from '../components/Loading'
import { CardDetails } from "../components/CardDetails"
import { Input } from '../components/Input';
import { Button } from '../components/Button'

type RoutesParams = {
    orderId: string;
}

type OrderDetails = OrderProps & {
    description: string;
    solution: string;
    closed: string;
}

export function Details() {
    const [solution, setSolution] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState<OrderDetails>({} as OrderDetails);

    const navigator = useNavigation();
    const { colors } = useTheme();
    const route = useRoute();
    const { orderId } = route.params as RoutesParams

    function handleOrderClose() {
        if (!solution) {
            Alert.alert("Solicitação", "Informa a solução para encerrar a solicitação");
        }

        fireStore()
            .collection<OrderFirestoreDTO>('orders')
            .doc(orderId)
            .update({
                status: 'closed',
                solution,
                closed_at: fireStore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Solicitação", "Solicitação encerrada.");
                navigator.goBack();
            })
            .catch(error => {
                console.error(error);
                Alert.alert("Solicitação", "Não foi possivel encerrar a solicitação");
            });
    }

    useEffect(() => {
        fireStore()
            .collection<OrderFirestoreDTO>('orders')
            .doc(orderId)
            .get()
            .then((doc) => {
                const { patrimony, description, status, created_at, closed_at, solution } = doc.data();

                const closed = closed_at ? dateFormat(closed_at) : null;

                setOrder({
                    id: doc.id,
                    patrimony,
                    description,
                    status,
                    solution,
                    when: dateFormat(created_at),
                    closed
                });

                setIsLoading(false);
            });
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <VStack flex={1} bg="gray.700">
            <Box px={6} bg="gray.600">
                <Header title='Solicitação' />
            </Box>


            <HStack bg="gray.500" justifyContent="center" p={4} >
                {
                    order.status === 'closed'
                        ? <CircleWavyCheck size={22} color={colors.green[300]} />
                        : <Hourglass size={22} color={colors.secondary[700]} />
                }

                <Text
                    fontSize="sm"
                    color={order.status === "closed" ? colors.green[300] : colors.secondary[700]}
                    ml={2}
                    textTransform="uppercase"
                >
                    {order.status === 'closed' ? 'Finalizado' : 'em andamento'}
                </Text>

                <ScrollView mx={5} showsVerticalScrollIndicator={false}>

                    <CardDetails
                        title='equipamento'
                        description={`Patrimônio ${order.patrimony}`}
                        icon={DesktopTower}

                    />
                    <CardDetails
                        title='descrição do problema'
                        description={order.description}
                        icon={ClipboardText}
                        footer={`Registrado em ${order.when}`}
                    />



                    <CardDetails
                        title='solução'
                        icon={CircleWavyCheck}
                        description={order.solution}
                        footer={order.closed && `Encerrado em ${order.closed}`}
                    >
                        {
                            order.status === 'open' &&
                            <Input
                                placeholder='Descrição do Problema'
                                onChangeText={setSolution}
                                textAlignVertical="top"
                                multiline
                                h={24}
                            />
                        }

                    </CardDetails>
                </ScrollView>

                {
                    order.status === 'closed' &&
                    <Button
                        title='Encerrar Solicitação'
                        m={5}
                        onPress={handleOrderClose}
                    />
                }
            </HStack>
        </VStack>
    );
}