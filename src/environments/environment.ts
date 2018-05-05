// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  firebase: {
    apiKey: 'AIzaSyCSYigWQSk5bskfqtsfQbjrFHUbksHSx8w',
    authDomain: 'george-knap.firebaseapp.com',
    databaseURL: 'https://george-knap.firebaseio.com',
    projectId: 'george-knap',
    storageBucket: 'george-knap.appspot.com',
    messagingSenderId: '1098051930213'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.

