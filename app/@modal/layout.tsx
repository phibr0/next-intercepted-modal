import { Modal } from '@/app/Modal';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Modal>{children}</Modal>;
}
