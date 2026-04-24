import React from 'react';
import styles from './ComplexityDiamonds.module.scss';

interface ComplexityDiamondsProps {
    complexity: number
}

export const ComplexityDiamonds = (props: ComplexityDiamondsProps) => {
    const {complexity} = props;

    const renderComplexity = (complexity: number) => {


        const complexityDiamonds: React.ReactElement[] = [];

        for (let i = 0; i < 3; i++) {
            complexityDiamonds.push(
                <div
                    className={`${styles['complexity-diamonds__item']} ${i < complexity ? styles['complexity-diamonds__item--filled'] : ''}`}></div>
            )
        }

        return (<div className={styles['complexity-diamonds__wrapper']}>{complexityDiamonds}</div>)
    }

    return (
        <div className={styles['complexity-diamonds']}>
            {renderComplexity(complexity)}
        </div>
    );
};
