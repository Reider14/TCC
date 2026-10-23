import styles from "./styles.module.css";

type HeadingProps = {
  title: string;
  description: string;
};

export default function Heading({ title, description }: HeadingProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </header>
  );
}
