import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center text-lg">
      Click{" "}
      <Link href="/documents/123" className="px-2 text-blue-500">
        here
      </Link>{" "}
      to the document detail
    </div>
  );
}
