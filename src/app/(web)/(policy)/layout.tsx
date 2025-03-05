import { Navbar } from "@/components/web/navigation/navbar";

const PolicyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PolicyLayout;
