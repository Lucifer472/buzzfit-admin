export const Title = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <p className="text-4xl font-bold text-pink-600">|</p>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
};
