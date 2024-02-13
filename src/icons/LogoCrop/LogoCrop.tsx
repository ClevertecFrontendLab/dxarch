import React from 'react';

import icons from '../../assets/sprite.svg';

import styles from './LogoCrop.module.scss';

export const LogoCrop: React.FC = () => {
    return (
        <div className={styles.padding}>
            <svg className={styles.logo}>
                <use href={`${icons}#logo-cropped`} />
            </svg>
        </div>
    );
};
