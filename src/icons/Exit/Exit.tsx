import React from 'react';

import icons from '../../assets/sprite.svg';

import styles from './Exit.module.scss';

export const Exit: React.FC = () => {
    return (
            <svg className={styles.exit}>
                <use href={`${icons}#exit`} />
            </svg>
    );
};
