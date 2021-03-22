import('./firebase-performance-standalone').then((firebase) => {
  firebase.initializeApp({
    apiKey: 'xxx',
    authDomain: 'xxx',
    databaseURL: 'xxx',
    projectId: 'xxx',
    storageBucket: 'xxx',
    messagingSenderId: 'xxx',
    appId: 'xxx',
  });

  const perf = firebase.performance();

  const metrics = {
    'renderTime': 10,
    'nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA': 15,
    'sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA': 20,
    'nBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB': 35,
    'sBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB': 40,
    'nCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC': 45,
    'sCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC': 60,
    'nDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD': 75,
    'sDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD': 90,
  }

  perf.trace('serverRender').record(1, 10, { metrics });
});
