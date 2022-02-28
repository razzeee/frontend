import { useTranslation } from 'next-export-i18n'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Collection from '../../../src/components/application/Collection'
import Main from '../../../src/components/layout/Main'
import { useSearchQuery } from '../../../src/hooks/useSearchQuery'

export default function Search() {
  const { t } = useTranslation()
  const router = useRouter()
  const { query } = router.query

  const searchResult = useSearchQuery(query as string)

  return (
    <Main>
      <NextSeo title={t('search-for-query', { query })} />

      {searchResult && (
        <Collection
          title={t('search-for-query', { query })}
          applications={searchResult}
        />
      )}
    </Main>
  )
}
