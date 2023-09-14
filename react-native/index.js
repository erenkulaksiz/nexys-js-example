import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import nexys from './nexys';

nexys.init()

AppRegistry.registerComponent(appName, () => App);
