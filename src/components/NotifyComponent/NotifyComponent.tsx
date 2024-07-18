import styles from "./NotifyComponent.module.scss"

export default function NotifyComponent({
    notification
}: {
    notification: {
        content: string, isOpen: boolean
    }
}) {
    return (
        <>
            {notification.isOpen &&
                <div className={`${styles["section-container-notify"]}`}>
                    <div className={`${styles["notification-container"]}`}>
                        <p className={styles["text"]}>{notification.content}</p>
                    </div>
                </div>}
        </>
    )
}