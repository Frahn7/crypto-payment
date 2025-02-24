import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Mulish } from "next/font/google";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${mulish.variable} ${mulish.className}`}>
        <Component {...pageProps} />
        <Analytics />
        <footer className="flex justify-center items-center gap-4 h-fit fixed bottom-8 w-full ">
          <Image
            src="/bitnovo.svg"
            alt="Powered by Bitnovo"
            width={164}
            height={26}
          />
          <div className="h-[26px] w-0 border-l border-[#C0CCDA]" />
          <p className="text-xs/[18px] font-bold text-[#C0CCDA]">
            © 2022 Bitnovo. All rights reserved.
          </p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
