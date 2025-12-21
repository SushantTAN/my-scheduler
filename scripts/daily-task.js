async function keepAlive() {
  console.log('Keep-alive ping:', new Date().toISOString())

  const urls = [
    'https://e-commerce-0dit.onrender.com/',
    'https://restro-menu-tie0.onrender.com/',
  ]

  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'GET' })
      console.log(url, '→', res.status)
    } catch (err) {
      console.error(url, '→ failed', err.message)
    }
  }
}

keepAlive()
