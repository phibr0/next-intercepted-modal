import Link from 'next/link';

export default function ({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-2">
      <span>{params.id} - Subpage</span>
      <Link href={`/${params.id}`}>Go to Overview</Link>
      <Link href="/">Home</Link>
    </div>
  );
}
