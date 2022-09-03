import Hapi from '@hapi/hapi';

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: '0.0.0.0',
  });

  server.route({
    method: 'GET',
    path: '/saveone',
    handler: () => {
      return {
        message: [
          "Mohon maaf untuk Youtube <u><em>terkadang</em></u> mengalami error, saya sedang memperbaikinya ASAP :'",
          '<br><br>Jika bermasalah atau ingin bertanya silahkan email ke <a target="_blank" href="mailto:email@aliazhar.my.id">email@aliazhar.my.id</a>',
        ],
      };
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
