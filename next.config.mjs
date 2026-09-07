import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  reactStrictMode: true,
  async redirects() {
    return [{ source: '/', destination: '/introduction', permanent: false }]
  }
})
