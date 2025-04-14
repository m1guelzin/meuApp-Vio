import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Home from "./screens/Home";
import CadastroEventoScreen from './screens/CadastroEventoScreen';
import CadastroOrganizadorScreen from './screens/CadastroOrganizadorScreen';
import CadastroIngressoScreen from './screens/CadastroIngressoScreen';
import TaskList from "./screens/TaskList";
import TaskDetail from "./screens/TaskDetail";
import EventosScreen from "./screens/EventosScreen";

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Layout from "./components/Layout";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>

        {/* <Stack.Screen name="TaskList" component={TaskList} />
        <Stack.Screen name="TaskDetail" component={TaskDetail}/> */}

        <Stack.Screen name="Login" component={()=>(
          <Layout>
            <Login/>
          </Layout>
        )}/>
        <Stack.Screen name="Cadastro" component={()=>(
          <Layout>
            <Cadastro/>
          </Layout>
        )}/>

        <Stack.Screen name="EventosScreen" component={EventosScreen}/>

        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CadastroEventoScreen" component={CadastroEventoScreen} />
        <Stack.Screen name="CadastroOrganizadorScreen" component={CadastroOrganizadorScreen} />
        <Stack.Screen name="CadastroIngressoScreen" component={CadastroIngressoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

