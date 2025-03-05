import { Footer } from "@/components/web/navigation/footer";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-sm mx-auto w-full min-h-screen relative overflow-hidden">
      {children}
      <Footer />
    </div>
  );
};

export default WebLayout;
