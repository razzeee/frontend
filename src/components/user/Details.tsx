import { useTranslation } from 'next-export-i18n'
import { FunctionComponent } from 'react'
import { useUserContext } from '../../context/user-info'
import LogoutButton from '../login/LogoutButton'
import styles from './Details.module.scss'

const UserDetails: FunctionComponent = () => {
  const user = useUserContext()
  const { t } = useTranslation();

  // Nothing to show if not logged in
  if (!user.info) {
    return <></>
  }

  const {
    github_avatar,
    github_login,
    displayname,
    "dev-flatpaks": flatpaks
  } = user.info

  return (
    <div className='main-container'>
      <div className={styles.details}>
        <img
          src={github_avatar}
          className={styles.avatar}
          alt={t('user-avatar', { user: github_login })}
        />
        <div className={styles.textDetails}>
          <h2>{displayname}</h2>
          <p>{t('github-account')}: <a href={`https://github.com/${github_login}`}
            target='_blank'
            rel='noreferrer'
            title={t('open-in-new-tab')}>@{github_login}</a></p>
        </div>
        <div className='actions'>
          <LogoutButton />
        </div>
      </div>
    </div >
  )
}

export default UserDetails
