import {
    useColorScheme,
    SafeAreaView,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
  } from 'react-native';
  import {Colors} from 'react-native/Libraries/NewAppScreen';
  import { styles } from '../styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
  
  type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
  function LoginScreen({route, navigation}: Props): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView>
        <Text>Login</Text>
        <TextInput placeholder="Your email" />
        <TextInput placeholder="password" />
       
        <Button
          title="Forgot Password"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Login"
         
          accessibilityLabel="Learn more about this purple button"
        />
        <TouchableOpacity  onPress={() => navigation.push('Login')}>
          <Text>Don't remeber your account? Sign up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  
  
  export default LoginScreen;