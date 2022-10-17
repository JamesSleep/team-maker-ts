import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import Login from '../../screen/Login';

type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  FindPassword: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, T>;

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  const {Navigator, Screen} = Stack;
  <Navigator>
    <Screen name="Login" component={Login} />
  </Navigator>;
};
