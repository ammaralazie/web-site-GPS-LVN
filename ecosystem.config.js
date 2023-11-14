module.exports = {
  apps: [
    {
      name: 'WEB SITE GPS LVN',
      script: './node_modules/nuxt/bin/nuxt',
      exec_mode: 'cluster', // enables clustering
      instances: 'max',
      args: 'start',
      autorestart: true,
      max_memory_restart: '1G', // Adjust as needed
      env: {
        NODE_ENV: 'production',
        PORT: 3012 // Set your preferred port
      }
    }
  ]
}
