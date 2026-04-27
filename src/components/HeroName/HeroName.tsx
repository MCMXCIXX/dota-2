import styles from './HeroName.module.scss';
interface HeroNameProps {
    children: React.ReactNode;
    className?: string;
}

export const HeroName = (props: HeroNameProps) => {
    const {children, className} = props;
    return (
        <h2 className={`${styles.name} ${className}`}>{children}</h2>
    );
};
