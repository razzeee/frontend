import { GetStaticProps } from 'next'
import { useTranslation } from 'next-export-i18n';
import { NextSeo } from 'next-seo'
import ApplicationCollection from '../../../src/components/application/Collection'
import Main from '../../../src/components/layout/Main'
import fetchCollection from '../../../src/fetchers'
import { Appstream } from '../../../src/types/Appstream'
import { Collections } from '../../../src/types/Collection'


export default function EditorChoiceGames({ applications }) {
  const { t } = useTranslation()
  return (
    <Main>
      <NextSeo title={t("editors-choice-games")} />
      <ApplicationCollection
        title={t("editors-choice-games")}
        applications={applications}
      />
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const applications: Appstream[] = await fetchCollection(
    Collections.editorsGames
  )

  return {
    props: {
      applications,
    },
  }
}
