import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-2">
      <span>{params.id} - Overview</span>
      <Link href={`/${params.id}/subpage`}>Go to subpage</Link>
      <Link href="/">Home</Link>
    </div>
  );
}
