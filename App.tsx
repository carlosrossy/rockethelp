import { NativeBaseProvider } from 'native-base'

import { THEME } from './src/styles/theme';

import { SingIn } from "./src/screens/SingIn";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <SingIn />
    </NativeBaseProvider>
  );
}
