import { Modal } from '@/app/Modal';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Modal><div className="rounded-md bg-black min-w-[600px] p-4">{children}</div></Modal>;
}
