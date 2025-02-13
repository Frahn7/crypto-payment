import CryptoPaymentForm from "@/components/crypto-payment-form";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${mulish.variable} min-h-screen flex justify-center  flex-col w-full`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CryptoPaymentForm />
      </main>
    </div>
  );
}
