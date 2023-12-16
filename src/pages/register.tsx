import {
  useColorScheme,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../styles';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;
function RegisterScreen({route, navigation}: Props): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>Getting Started</Text>
      <TextInput placeholder="Your email" />
      <TextInput placeholder="password" />
      <TextInput placeholder="re-enter password" />
      <Button
        title="Forgot Password"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        title="Register"
        onPress={() => navigation.push('Login')}
        accessibilityLabel="Learn more about this purple button"
      />
      <TouchableOpacity onPress={() => {}}>
        <Text>Already have an account? Login!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default RegisterScreen;
