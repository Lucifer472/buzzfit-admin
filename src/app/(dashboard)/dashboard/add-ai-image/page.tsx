import { AddImageAiForm } from "@/components/dashboard/add-image-ai/add-image-ai-form";

const AddAiImage = () => {
  return (
    <div className="w-full border rounded-md shadow-xl p-4 bg-white">
      <h2 className="w-full border-b py-2 px-2 text-2xl font-medium">
        Add Ai Image
      </h2>
      <div className="w-full px-2 py-4">
        <AddImageAiForm />
      </div>
    </div>
  );
};

export default AddAiImage;
