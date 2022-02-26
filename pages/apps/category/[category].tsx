import { GetStaticPaths, GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import Collection from '../../../src/components/application/Collection'
import { fetchCategory } from '../../../src/fetchers'
import { Appstream } from '../../../src/types/Appstream'
import { Category, categoryToName } from '../../../src/types/Category'

const ApplicationCategory = ({ applications }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const category = router.query.category as Category
  let title = categoryToName(category, t)

  return (
    <>
      <NextSeo title={title} />
      <Collection title={title} applications={applications} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const applications: Appstream[] = await fetchCategory(
    params.category as keyof typeof Category
  )

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      applications,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const data = Object.keys(Category).map((c) => ({
    params: {
      category: c,
    },
  }))
  let paths: Array<{ locale: string; params: { category: string } }> = [];
  locales.forEach((locale) => {
    data.forEach((path) => {
      paths.push({
        locale,
        params: { category: path.params.category },
      });
    });
  });

  return {
    paths,
    fallback: false,
  }
}


export default ApplicationCategory
