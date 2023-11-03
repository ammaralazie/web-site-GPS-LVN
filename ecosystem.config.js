module.exports = {
  apps: [
    {
      name: 'WEB SITE GPS LVN', // Replace with your app name
      script: 'npm',
      args: 'start',
      exec_mode: 'cluster',
      instances: 'max', // Set the number of instances you want
      autorestart: true,
      watch: false,
      max_memory_restart: '1G', // Adjust as needed
      env: {
        NODE_ENV: 'production',
        PORT: 3000 // Set your preferred port
      }
    }
  ]
}
