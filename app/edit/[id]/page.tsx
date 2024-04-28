import EditForm from "@/components/edit-form";
import { getImageById } from "@/lib/data";
import { notFound } from "next/navigation";

const EditPage = async ({ params }: { params: { id: string } }) => {
  const data = await getImageById(params.id);
  if (!data) return notFound();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-indigo-50 rounded-md shadow-md p-8">
        <h1 className="text-2xl font-bold mb-5">Update Image</h1>
        <EditForm data={data} />
      </div>
    </div>
  );
};

export default EditPage;
