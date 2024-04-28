import CreateForm from "@/components/create-form";

const CreatePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-indigo-50 rounded-md shadow-md p-8">
        <h1 className="text-2xl font-bold mb-5">Upload Image</h1>
        <CreateForm />
      </div>
    </div>
  );
};

export default CreatePage;
