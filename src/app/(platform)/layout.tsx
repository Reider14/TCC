import Sidebar from "@/components/SideBar";
import styles from "./styles.module.css";
import { PlatformToastProvider } from "@/context/PlatformToastProvider/PlatformToastProvider";

type PlatformLayoutProps = {
  children: React.ReactNode;
};

export default function PlatformLayout({ children }: PlatformLayoutProps) {
  return (
    <PlatformToastProvider>
      <div className={styles.platform}>
        <Sidebar />

        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>
      </div>
    </PlatformToastProvider>
  );
}
