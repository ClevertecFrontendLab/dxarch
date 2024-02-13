import React from 'react';

import icons from '../../assets/sprite.svg';

import styles from './Logo.module.scss';

export const Logo: React.FC = () => {
    return (
        <div className={styles.padding}>
            <svg className={styles.logo}>
                <use href={`${icons}#logo`} />
            </svg>
        </div>
    )
}
