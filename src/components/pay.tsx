import React, { useEffect, useState } from "react";
import CountdownTimer from "./timer";
import { QRCodeSVG } from "qrcode.react";

const TimerIcon = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 22.75C7.26 22.75 3 18.49 3 13.25C3 8.01 7.26 3.75 12.5 3.75C17.74 3.75 22 8.01 22 13.25C22 18.49 17.74 22.75 12.5 22.75ZM12.5 5.25C8.09 5.25 4.5 8.84 4.5 13.25C4.5 17.66 8.09 21.25 12.5 21.25C16.91 21.25 20.5 17.66 20.5 13.25C20.5 8.84 16.91 5.25 12.5 5.25Z"
        fill="#002859"
      />
      <path
        d="M12.5 13.75C12.09 13.75 11.75 13.41 11.75 13V8C11.75 7.59 12.09 7.25 12.5 7.25C12.91 7.25 13.25 7.59 13.25 8V13C13.25 13.41 12.91 13.75 12.5 13.75Z"
        fill="#002859"
      />
      <path
        d="M15.5 2.75H9.5C9.09 2.75 8.75 2.41 8.75 2C8.75 1.59 9.09 1.25 9.5 1.25H15.5C15.91 1.25 16.25 1.59 16.25 2C16.25 2.41 15.91 2.75 15.5 2.75Z"
        fill="#002859"
      />
    </svg>
  );
};

const AdIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M21.08 8.58003V15.42C21.08 16.54 20.4799 17.58 19.5099 18.15L13.5699 21.58C12.5999 22.14 11.3999 22.14 10.4199 21.58L4.47992 18.15C3.50992 17.59 2.90991 16.55 2.90991 15.42V8.58003C2.90991 7.46003 3.50992 6.41999 4.47992 5.84999L10.4199 2.42C11.3899 1.86 12.5899 1.86 13.5699 2.42L19.5099 5.84999C20.4799 6.41999 21.08 7.45003 21.08 8.58003Z"
        fill="#EAB308"
      />
      <path
        d="M12 10.5C12.41 10.5 12.75 10.84 12.75 11.25L12.75 16.5C12.75 16.91 12.41 17.25 12 17.25C11.59 17.25 11.25 16.91 11.25 16.5L11.25 11.25C11.25 10.84 11.59 10.5 12 10.5Z"
        fill="#002859"
      />
      <path
        d="M12 7.00014C12.13 7.00014 12.26 7.03016 12.38 7.08016C12.51 7.13016 12.61 7.20012 12.71 7.29012C12.8 7.39012 12.87 7.50014 12.93 7.62014C12.98 7.74014 13 7.87014 13 8.00014C13 8.26014 12.9 8.52016 12.71 8.71016C12.61 8.80016 12.51 8.87012 12.38 8.92012C12.01 9.08012 11.57 8.99016 11.29 8.71016C11.2 8.61016 11.13 8.51015 11.08 8.38015C11.03 8.26015 11 8.13014 11 8.00014C11 7.87014 11.03 7.74014 11.08 7.62014C11.13 7.50014 11.2 7.39012 11.29 7.29012C11.48 7.10012 11.73 7.00014 12 7.00014Z"
        fill="#002859"
      />
    </svg>
  );
};

const CopyIcon = () => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.25 7.8125C7.73223 7.8125 7.3125 8.23223 7.3125 8.75V15.5C7.3125 16.0178 7.73223 16.4375 8.25 16.4375H15C15.5178 16.4375 15.9375 16.0178 15.9375 15.5V8.75C15.9375 8.23223 15.5178 7.8125 15 7.8125H8.25ZM6.1875 8.75C6.1875 7.61091 7.11091 6.6875 8.25 6.6875H15C16.1391 6.6875 17.0625 7.61091 17.0625 8.75V15.5C17.0625 16.6391 16.1391 17.5625 15 17.5625H8.25C7.11091 17.5625 6.1875 16.6391 6.1875 15.5V8.75Z"
        fill="#0465DD"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 2.5625C2.75136 2.5625 2.5129 2.66127 2.33709 2.83709C2.16127 3.0129 2.0625 3.25136 2.0625 3.5V10.25C2.0625 10.4986 2.16127 10.7371 2.33709 10.9129C2.5129 11.0887 2.75136 11.1875 3 11.1875H3.75C4.06066 11.1875 4.3125 11.4393 4.3125 11.75C4.3125 12.0607 4.06066 12.3125 3.75 12.3125H3C2.45299 12.3125 1.92839 12.0952 1.54159 11.7084C1.1548 11.3216 0.9375 10.797 0.9375 10.25V3.5C0.9375 2.95299 1.1548 2.42839 1.54159 2.04159C1.92839 1.6548 2.45299 1.4375 3 1.4375H9.75C10.297 1.4375 10.8216 1.6548 11.2084 2.04159C11.5952 2.42839 11.8125 2.95299 11.8125 3.5V4.25C11.8125 4.56066 11.5607 4.8125 11.25 4.8125C10.9393 4.8125 10.6875 4.56066 10.6875 4.25V3.5C10.6875 3.25136 10.5887 3.0129 10.4129 2.83709C10.2371 2.66127 9.99864 2.5625 9.75 2.5625H3Z"
        fill="#0465DD"
      />
    </svg>
  );
};

export const Pay = ({
  expired_time,
  address,
  qr,
  crypto_amount,
}: {
  address?: string;
  expired_time?: string;
  qr: string;
  crypto_amount: number;
}) => {
  const [loading, setloading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  const handleCopy = async (label: string) => {
    try {
      await navigator.clipboard.writeText(label);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className="w-full ml-[32px] ">
      <p className="font-bold text-xl/6 text-primary">Realiza el pago</p>
      {loading ? (
        ""
      ) : (
        <div className="flex justify-center mt-[56px]">
          <TimerIcon />
          <CountdownTimer expiredTime={expired_time ?? ""} />
        </div>
      )}
      <div className="mt-[35px] flex flex-col gap-[32px] justify-center items-center shadow-lg rounded-[16px]">
        <div className="flex flex-row gap-4 ">
          <p className="w-[98px] h-[32px] bg-[#035AC5] text-white rounded-[100px] text-center pt-1">
            Smart QR
          </p>
          <p className="w-[98px] h-[32px] text-center pt-1 text-[#647184]">
            Web 3
          </p>
        </div>
        <p className="-mb-7">
          <QRCodeSVG value={qr} />
        </p>
        <div className="flex flex-col gap-3 items-center mb-[32px] mt-[32px] text-primary text-sm/5">
          <p className="flex flex-row items-center gap-2">
            Enviar <span className="font-bold">{crypto_amount}</span>{" "}
            <button onClick={() => handleCopy(crypto_amount.toString())}>
              <CopyIcon />
            </button>
          </p>
          <p className="flex flex-row items-center gap-2">
            {address}
            <button onClick={() => handleCopy(address as string)}>
              <CopyIcon />
            </button>
          </p>
          <p className="flex flex-row items-center gap-2">
            <AdIcon /> Etiqueta de destino: 2557164061
            <CopyIcon />
          </p>
          {copied && (
            <span className="text-primary font-bold text-sm">¡Copiado!</span>
          )}
        </div>
      </div>
    </div>
  );
};
