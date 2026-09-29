import localFont from 'next/font/local'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

const REPO_URL = 'https://github.com/aa3682/digital-product-guide'

// Outfit (variable, SIL OFL: fonts/OFL.txt) is committed in fonts/ and
// self-hosted by next/font, so no build depends on a font service.
const outfit = localFont({
  src: '../fonts/outfit-latin.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-outfit'
})

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
    <html lang="en" dir="ltr" className={outfit.variable} suppressHydrationWarning>
      {/* Slate theme: emerald accent #10b981 (hsl 160.1 84.1% 39.4%) on #0f172a.
          The site is dark only, so both theme slots get the slate page. */}
      <Head
        color={{ hue: 160.1, saturation: 84.1, lightness: 39.4 }}
        backgroundColor={{ dark: '#0f172a', light: '#0f172a' }}
      />
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
          darkMode={false}
          nextThemes={{ defaultTheme: 'dark', forcedTheme: 'dark' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
