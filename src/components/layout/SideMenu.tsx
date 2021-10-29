import Link from 'next/link'
import { useState } from 'react'

import Category from '../../types/Category'

import styles from './SideMenu.module.scss'
import { MdMenu } from 'react-icons/md'

const SideMenu = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className='sideMenu'>
        <button className='menuBars' onClick={showSidebar}>
          <MdMenu onClick={showSidebar} />
        </button>
      </div>
      <nav className={sidebar ? `${styles.navMenu} active` : styles.navMenu}>
        <section className={styles.sideMenuSection}>
          <h3>Discover</h3>
          <Link href='/apps/collection/popular' passHref>
            <span className='sideMenuLink'>Popular</span>
          </Link>
          <Link href='/apps/collection/recently-updated' passHref>
            <span className='sideMenuLink'>New &amp; Updated</span>
          </Link>
          <Link href='/apps/collection/editors-choice-apps' passHref>
            <span className='sideMenuLink'>Editor&apos;s Choice</span>
          </Link>
          <Link href='/apps/collection/editors-choice-games' passHref>
            <span className='sideMenuLink'>Editor&apos;s Choice Games</span>
          </Link>
        </section>
        <section className={styles.sideMenuSection}>
          <h3>Categories</h3>
          {Object.keys(Category).map((category) => (
            <Link href={`/apps/category/${category}`} key={category} passHref>
              <span className='sideMenuLink'>{category}</span>
            </Link>
          ))}
        </section>
      </nav>
    </>
  )
}

export default SideMenu
