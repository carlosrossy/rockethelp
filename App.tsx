import { NativeBaseProvider } from 'native-base'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { THEME } from './src/styles/theme';

import { SingIn } from "./src/screens/SingIn";
import { Loading } from './src/screens/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <SingIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
