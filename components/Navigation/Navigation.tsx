import styles from './navigation.module.scss';

export const Navigation = () => {
  return (
    <>
      <div className={styles.navigation}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
    </>
  );
};
