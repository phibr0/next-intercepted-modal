import Link from 'next/link';

export default function () {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/1234">Navigate to 1234</Link>
      <Link href="/asdf">Navigate to ASDF</Link>
    </div>
  );
}
