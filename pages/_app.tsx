import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { Box, ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

import '../styles/globals.css'
import '../public/fonts/fonts.css'

import Footer from '@components/Footer'
import DesktopNavbar from '@components/Navbar/Desktop'
import MobileNavbar from '@components/Navbar/Mobile'

import { theme } from 'theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const noNavPages: string[] = []
  const noFooterPages: string[] = ['/404']

  const showNav = !noNavPages.includes(router.pathname)
  const showFooter = !noFooterPages.includes(router.pathname)

  interface Ilinks {
    name: string
    path: string
    width?: number
    height?: number
    children?: { name: string; path: string }[]
  }
  const links: Ilinks[] = [
    { name: 'Home', path: '/' },
    {
      name: 'Sectors',
      path: '/sectors',
      width: 56,
      height: 28,
      children: [
        { name: 'Climate Change', path: '/climate-change' },
        { name: 'Circular Economy', path: '/circular-economy' },
        { name: 'Disaster Risk Reduction', path: '/disaster-risk-reduction' }
      ]
    },
    {
      name: 'Organization',
      path: '/organization',
      width: 48,
      height: 28,
      children: [
        { name: 'About Us', path: '/' },
        { name: 'Media', path: '/media' },
        { name: 'Careers', path: '/career' }
      ]
    },
    { name: 'Contact Us', path: '/contact-us' }
  ]

  return (
    <ChakraProvider theme={theme} resetCSS>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.pathname}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1,
              transition: { duration: 0.5 }
            }
          }}
        >
          <Box bgColor="white" pos="relative" overflow="hidden">
            {showNav && (
              <>
                <DesktopNavbar links={links} />
                <MobileNavbar links={links} />
              </>
            )}

            <Component {...pageProps} />

            {showFooter && <Footer />}
          </Box>
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
