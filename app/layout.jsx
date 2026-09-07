import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

const REPO_URL = 'https://github.com/aa3682/digital-product-guide'

export const metadata = {
  title: {
    default: 'Digital Product Guide',
    template: '%s – Digital Product Guide'
  },
  description: 'An open guide to launching and selling a digital product on your own.'
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={<Navbar logo={<b>Digital Product Guide</b>} projectLink={REPO_URL} />}
          footer={
            <Footer>
              <div>
                <p>
                  Written and maintained by one person who is building and selling a first digital
                  product on the side. Independent, unsponsored, and open: prose is CC BY 4.0, code is
                  MIT.
                </p>
                <p>{new Date().getFullYear()} © Digital Product Guide</p>
              </div>
            </Footer>
          }
          docsRepositoryBase={`${REPO_URL}/blob/main`}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
