"use client";

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const Ads1 = () => {
  const adRef = useRef<HTMLModElement>(null); // Reference to the ad container
  const pathname = usePathname();

  useEffect(() => {
    const pushAd = () => {
      try {
        // Check if the ad container is visible and has width
        if (adRef.current && adRef.current.offsetWidth > 0) {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } else {
          console.warn("Ad container not ready, retrying...");
          setTimeout(pushAd, 100); // Retry after a short delay
        }
      } catch (e) {
        console.error("AdSense error:", e);
      }
    };

    // Wait for the AdSense script to load
    // @ts-ignore
    if (window.adsbygoogle) {
      pushAd();
    } else {
      window.addEventListener("load", pushAd);
      return () => window.removeEventListener("load", pushAd); // Cleanup
    }
  }, [pathname]); // Runs once on mount

  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      <div style={{ minWidth: "336px", minHeight: "280px" }}>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6808814529890463"
          data-ad-slot="6036611144"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
};

export const Ads2 = () => {
  const adRef = useRef<HTMLModElement>(null); // Reference to the ad container
  const pathname = usePathname();

  useEffect(() => {
    const pushAd = () => {
      try {
        // Check if the ad container is visible and has width
        if (adRef.current && adRef.current.offsetWidth > 0) {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } else {
          console.warn("Ad container not ready, retrying...");
          setTimeout(pushAd, 100); // Retry after a short delay
        }
      } catch (e) {
        console.error("AdSense error:", e);
      }
    };

    // Wait for the AdSense script to load
    // @ts-ignore
    if (window.adsbygoogle) {
      pushAd();
    } else {
      window.addEventListener("load", pushAd);
      return () => window.removeEventListener("load", pushAd); // Cleanup
    }
  }, [pathname]); // Runs once on mount

  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      <div style={{ minWidth: "336px", minHeight: "280px" }}>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6808814529890463"
          data-ad-slot="8324035544"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
};

export const Ads3 = () => {
  const adRef = useRef<HTMLModElement>(null); // Reference to the ad container
  const pathname = usePathname();

  useEffect(() => {
    const pushAd = () => {
      try {
        // Check if the ad container is visible and has width
        if (adRef.current && adRef.current.offsetWidth > 0) {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } else {
          console.warn("Ad container not ready, retrying...");
          setTimeout(pushAd, 100); // Retry after a short delay
        }
      } catch (e) {
        console.error("AdSense error:", e);
      }
    };

    // Wait for the AdSense script to load
    // @ts-ignore
    if (window.adsbygoogle) {
      pushAd();
    } else {
      window.addEventListener("load", pushAd);
      return () => window.removeEventListener("load", pushAd); // Cleanup
    }
  }, [pathname]); // Runs once on mount

  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      <div style={{ minWidth: "336px", minHeight: "280px" }}>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6808814529890463"
          data-ad-slot="4551214014"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
};
