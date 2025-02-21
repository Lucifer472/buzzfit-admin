import QuizFormCard from "@/components/dashboard/add-quiz/quiz-form";

const AddQuizPage = () => {
  return (
    <div className="w-full border rounded-md shadow-xl p-4 bg-white">
      <h2 className="w-full border-b py-2 px-2 text-2xl font-medium">
        Add Quiz
      </h2>
      <div className="w-full px-2 py-4">
        <QuizFormCard />
      </div>
    </div>
  );
};

export default AddQuizPage;
