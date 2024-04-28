"use client";
import { uploadImage } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "./button";

const CreateForm = () => {
  const [state, formAction] = useFormState(uploadImage, null);
  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          className="py-2 px-4 rounded-md border-gray-400 w-full"
          placeholder="Title...."
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image"
          className="file:py-2 file:px-4 file:mr-2 file:rounded-sm file:border-0 file:bg-gray-300 hover:file:bg-gray-400 file:cursor-pointer border border-gray-500 w-full rounded-md"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.image}</p>
        </div>
      </div>
      <div className="mb-4 pt-4">
        <SubmitButton lable="upload" />
      </div>
    </form>
  );
};

export default CreateForm;
