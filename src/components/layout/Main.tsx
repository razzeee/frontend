import { FunctionComponent } from 'react'

import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
import PageContent from './PageContent'

const instance = createInstance({
  urlBase: process.env.NEXT_PUBLIC_SITE_BASE_URI,
  siteId: Number(process.env.NEXT_PUBLIC_MATOMO_WEBSITE_ID) || 38,
  trackerUrl: 'https://webstats.gnome.org/matomo.php',
  srcUrl: 'https://webstats.gnome.org/matomo.js',
})

const Main: FunctionComponent = ({ children }) => {
  return (
    <MatomoProvider value={instance}>
      <PageContent>{children}</PageContent>
    </MatomoProvider>
  )
}

export default Main
