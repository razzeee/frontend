import { GetStaticPaths, GetStaticProps } from 'next'
import { useTranslation } from 'next-export-i18n';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo'
import ApplicationCollection from '../../../../src/components/application/Collection'
import Main from '../../../../src/components/layout/Main'
import { fetchDeveloperApps, fetchDevelopers } from '../../../../src/fetchers'
import { Appstream } from '../../../../src/types/Appstream'


export default function Developer({
    developerApps,
    developer,
}: {
    developerApps: Appstream[]
    developer: string
}) {
    const { t } = useTranslation()
    return (
        <Main>
            <NextSeo title={t('applications-by-developer', { developer })} />
            <ApplicationCollection
                title={t('applications-by-developer', { developer })}
                applications={developerApps}
            />
        </Main>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale,
    params: { developer },
}) => {
    const developerApps = await fetchDeveloperApps(developer as string)
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            developerApps: developerApps ?? [],
            developer
        },
    }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const apps = await fetchDevelopers()
    const data = apps.map((developer) => ({
        params: { developer },
    }))
    let paths: Array<{ locale: string; params: { developer: string } }> = [];
    locales.forEach((locale) => {
        data.forEach((path) => {
            paths.push({
                locale,
                params: { developer: path.params.developer },
            });
        });
    });

    return {
        paths,
        fallback: false,
    }
}