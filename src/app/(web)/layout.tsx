import { Footer } from "@/components/web/navigation/footer";
import Script from "next/script";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-sm mx-auto w-full min-h-screen relative overflow-hidden">
      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6808814529890463"
        crossOrigin="anonymous"
        async
      />
      {children}
      <Footer />
    </div>
  );
};

export default WebLayout;
