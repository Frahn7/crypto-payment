import { Pay } from "@/components/pay";
import { ResumePayment } from "@/components/resume-payment";
import { useRouter } from "next/router";
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
  address: string;
}

const Resume = () => {
  const X_DEVICE_ID = process.env.NEXT_PUBLIC_X_DEVICE_ID;
  const [dataPayment, setDataPayment] = useState<Payment>();
  const [status, setStatus] = useState("");

  const router = useRouter();
  const PAYMENT_IDENTIFIER = router.query.id;
  const QR = router.query.qr;
  const concept = router.query.concept;

  const ResumeFetch = async () => {
    try {
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

  if (status == "EX" || status == "OC") {
    router.push("/payment?RE");
  }
  if (status == "CO" || status === "AC") {
    router.push("/payment");
  }

  useEffect(() => {
    ResumeFetch();
  }, []);

  useEffect(() => {
    const socket = new WebSocket(
      `wss://payments.pre-bnvo.com/ws/${PAYMENT_IDENTIFIER}`
    );

    socket.addEventListener("open", () => {
      console.log("Conectado");
    });

    socket.addEventListener("message", (event) => {
      console.log("Mensaje:", JSON.parse(event.data).status);
      setStatus(JSON.parse(event.data).status);
    });

    socket.addEventListener("error", (event) => {
      console.error("Error:", event);
    });

    socket.addEventListener("close", (event) => {
      console.log("Conexión cerrada:", event);
    });

    return () => socket.close();
  }, [PAYMENT_IDENTIFIER]);

  return (
    <div className="flex px-[157px] h-screen items-center ">
      <ResumePayment dataPayment={dataPayment} concept={concept as string} />
      <Pay
        expired_time={
          dataPayment?.expired_time ?? "2025-02-13T03:56:27.591736+01:00"
        }
        address={dataPayment?.address}
        qr={QR as string}
        crypto_amount={dataPayment?.crypto_amount as number}
      />
    </div>
  );
};

export default Resume;
