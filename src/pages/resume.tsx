import { Pay } from "@/components/pay";
import { ResumePayment } from "@/components/resume-payment";
import React, { useEffect, useState } from "react";

export interface Payment {
  crypto_amount: number;
  currency_id: string;
  expired_time: string;
  fiat: string;
  fiat_amount: number;
  identifier: string;
  merchant_device: string;
  merchant_device_id: number;
  status: string;
  edited_at: string;
}

const Resume = () => {
  const X_DEVICE_ID = process.env.NEXT_PUBLIC_X_DEVICE_ID;
  const [dataPayment, setDataPayment] = useState<Payment>();

  const ResumeFetch = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const PAYMENT_IDENTIFIER = urlParams.keys().next().value;
      const response = await fetch(
        `https://payments.pre-bnvo.com/api/v1/orders/info/${PAYMENT_IDENTIFIER}`,
        {
          method: "GET",
          headers: {
            "X-Device-Id": X_DEVICE_ID!,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setDataPayment(data[0]);
      console.log(data);
    } catch (error) {
      console.error("Error en el fetch:", error);
    }
  };

  useEffect(() => {
    ResumeFetch();
  }, []);

  return (
    <div className="flex px-[157px] h-screen items-center ">
      <ResumePayment dataPayment={dataPayment} />
      <Pay
        expired_time={
          dataPayment?.expired_time ?? "2025-02-13T03:56:27.591736+01:00"
        }
        identifier={dataPayment?.identifier}
      />
    </div>
  );
};

export default Resume;
