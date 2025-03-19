import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Home from "./screens/Home";
import CadastroEventoScreen from './screens/CadastroEventoScreen';
import CadastroOrganizadorScreen from './screens/CadastroOrganizadorScreen';
import CadastroIngressoScreen from './screens/CadastroIngressoScreen';

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CadastroEventoScreen" component={CadastroEventoScreen} />
        <Stack.Screen name="CadastroOrganizadorScreen" component={CadastroOrganizadorScreen} />
        <Stack.Screen name="CadastroIngressoScreen" component={CadastroIngressoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

