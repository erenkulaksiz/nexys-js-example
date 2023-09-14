import Nexys from 'nexys';
import storage from './storage';

const nexys = new Nexys('API_KEY', {
  appName: 'APP_NAME',
  debug: true,
  localStorage: {
    useAdapter: true,
    key: 'nex',
    testKey: 'nex-test',
    adapter: {
      getItem: (key: string) => {
        return storage.load({key}).catch(err => {
          // any exception including data not found
          // goes to catch()
          console.warn(err.message);
          switch (err.name) {
            case 'NotFoundError':
              // TODO;
              break;
            case 'ExpiredError':
              // TODO
              break;
          }
        });
      },
      setItem: (key: string, value: any) => {
        return storage.save({key, data: value});
      },
      removeItem: (key: string) => {
        return storage.remove({key});
      },
      clear: () => {
        return storage.clearMap();
      },
    },
  },
});

export default nexys;
