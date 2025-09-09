import styles from './InlineComponent.module.css';
export default function inlineComponent() {
    return (
        <div>
            <h2 className={styles.header}>Inline Component Example</h2>
        </div>
    );
}