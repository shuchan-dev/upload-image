import Card from "@/components/card";
import Link from "next/link";
import { getImages } from "@/lib/data";

export default async function Home() {
  const images = await getImages();
  return (
    <div className="max-w-screen-lg mx-auto py-14">
      <div className="flex items-end justify-between">
        <h1 className="text-4xl font-bold text-sky-900">Latest Images</h1>
        <Link
          href="/create"
          className="py-3 px-6 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md"
        >
          Upload New Image
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {images.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
