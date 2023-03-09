module.exports = {
  apps : [
    {
      name   : "simplebackend",
      script : "dist/server.js",
      exec_mode: 'cluster',
      instances: 2,
      env_production: {
        NODE_ENV: "PRODUCTCION"
      },
      env_development: {
        NODE_ENV: "DEVELOPMENT"
      }
    }
  ]
}
