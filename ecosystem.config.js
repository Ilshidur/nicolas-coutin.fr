module.exports = {
  apps : [

    {
      name: 'app',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: 'build',
        PM2_SERVE_PORT: 3000
      }
    }
    
  ]
};
