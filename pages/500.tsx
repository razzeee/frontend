import { Trans, useTranslation } from "next-i18next"
import { NextSeo } from "next-seo"
import Main from "../src/components/layout/Main"

export default function Custom500() {
    const { t } = useTranslation()
    return (
        <Main>
            <NextSeo title={t('server-error')} />
            <div className='main-container'>
                <h1>{t('whoops')}</h1>
                <p>
                    {t('an-error-occurred-server')}
                </p>
                <p>
                    <Trans i18nKey={"common:retry-or-go-home"}>
                        You might want to retry or go back <a href='.'>home</a>.
                    </Trans>
                </p>
            </div>
        </Main>
    )
}
