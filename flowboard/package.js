Package.describe({
  name: 'flowboard',
});

Package.onUse((api) => {
  api.use('modules');
  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');
  //   api.mainModule('index.js', 'imports');
  api.export('flowboard');
});
