import { Payment } from "@/pages/resume";
import React from "react";

function CheckIcon() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M11.2499 2.45009C11.9399 1.86009 13.0699 1.86009 13.7699 2.45009L15.3499 3.81009C15.6499 4.07009 16.2099 4.28009 16.6099 4.28009H18.3099C19.3699 4.28009 20.2399 5.15009 20.2399 6.21009V7.91009C20.2399 8.30009 20.4499 8.87009 20.7099 9.17009L22.0699 10.7501C22.6599 11.4401 22.6599 12.5701 22.0699 13.2701L20.7099 14.8501C20.4499 15.1501 20.2399 15.7101 20.2399 16.1101V17.8101C20.2399 18.8701 19.3699 19.7401 18.3099 19.7401H16.6099C16.2199 19.7401 15.6499 19.9501 15.3499 20.2101L13.7699 21.5701C13.0799 22.1601 11.9499 22.1601 11.2499 21.5701L9.66988 20.2101C9.36988 19.9501 8.80988 19.7401 8.40988 19.7401H6.67988C5.61988 19.7401 4.74988 18.8701 4.74988 17.8101V16.1001C4.74988 15.7101 4.53988 15.1501 4.28988 14.8501L2.93988 13.2601C2.35988 12.5701 2.35988 11.4501 2.93988 10.7601L4.28988 9.17009C4.53988 8.87009 4.74988 8.31009 4.74988 7.92009V6.20009C4.74988 5.14009 5.61988 4.27009 6.67988 4.27009H8.40988C8.79988 4.27009 9.36988 4.06009 9.66988 3.80009L11.2499 2.45009Z"
        fill="#15BBE0"
      />
      <path
        d="M11.2901 15.1701C11.0901 15.1701 10.9001 15.0901 10.7601 14.9501L8.34006 12.5301C8.05006 12.2401 8.05006 11.7601 8.34006 11.4701C8.63006 11.1801 9.11006 11.1801 9.40006 11.4701L11.2901 13.3601L15.5901 9.06009C15.8801 8.77009 16.3601 8.77009 16.6501 9.06009C16.9401 9.35009 16.9401 9.83009 16.6501 10.1201L11.8201 14.9501C11.6801 15.0901 11.4901 15.1701 11.2901 15.1701Z"
        fill="#15BBE0"
      />
    </svg>
  );
}
function CurrencyIcon() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.043 20C15.5658 20 20.043 15.5229 20.043 10C20.043 4.4772 15.5658 4.57764e-05 10.043 4.57764e-05C4.52012 4.57764e-05 0.0429688 4.4772 0.0429688 10C0.0429688 15.5229 4.52012 20 10.043 20Z"
        fill="black"
      />
      <path
        d="M14.0159 15.2942L11.3606 12.54C11.1753 12.3447 10.9521 12.1891 10.7047 12.0827C10.4573 11.9764 10.1908 11.9216 9.92153 11.9216C9.65223 11.9216 9.38575 11.9764 9.13833 12.0827C8.89091 12.1891 8.66774 12.3447 8.48241 12.54L5.82711 15.2942H4.16064L7.64888 11.6753C7.94164 11.3669 8.2941 11.1213 8.68481 10.9535C9.07552 10.7857 9.4963 10.6991 9.92153 10.6991C10.3468 10.6991 10.7675 10.7857 11.1582 10.9535C11.549 11.1213 11.9014 11.3669 12.1942 11.6753L15.6824 15.2942H14.0159ZM7.64947 8.89064L4.18241 5.29417H5.84829L8.48241 8.02593C8.66778 8.22124 8.89097 8.37678 9.13838 8.48306C9.38579 8.58934 9.65225 8.64416 9.92153 8.64416C10.1908 8.64416 10.4573 8.58934 10.7047 8.48306C10.9521 8.37678 11.1753 8.22124 11.3606 8.02593L13.9948 5.29417H15.6612L12.1942 8.89064C11.9015 9.19903 11.5491 9.44461 11.1584 9.61243C10.7677 9.78025 10.347 9.86679 9.92182 9.86679C9.49664 9.86679 9.07591 9.78025 8.68525 9.61243C8.29459 9.44461 7.94217 9.19903 7.64947 8.89064Z"
        fill="white"
      />
    </svg>
  );
}

interface ResumeProps {
  dataPayment?: Payment;
}

export const ResumePayment = ({ dataPayment }: ResumeProps) => {
  return (
    <div className="w-full h-[418px] flex flex-col gap-6 mt-[-130px]">
      <p className="font-bold text-xl/6 text-primary">Resumen del pedido</p>
      <div className="p-[32px] flex flex-col gap-[31px] w-full bg-[#F9FAFC]">
        <div className="text-primary font-bold text-[18px]/[22px] flex flex-row justify-between border-b pb-[26px] border-[#C0CCDA]">
          <p>Importe:</p>
          <p>
            <span className="mr-1">{dataPayment?.fiat_amount}</span>
            {dataPayment?.fiat}
          </p>
        </div>
        <div className="text-primary font-bold text-[16px]/[16px] flex flex-row justify-between border-b pb-[26px] border-[#C0CCDA]">
          <p>Moneda seleccionada:</p>
          <p className="flex flex-row items-center font-semibold text-[16px]/5">
            <CurrencyIcon /> <span className="ml-1">XRP</span>
          </p>
        </div>

        <div className="text-primary font-bold text-[16px]/[16px] flex flex-row justify-between ">
          <p>Comercio:</p>
          <p className="flex flex-row items-center font-semibold text-[16px]/5">
            <CheckIcon /> Comercio de pruebas de Semega
          </p>
        </div>
        <div className="text-primary font-bold text-[16px]/[16px] flex flex-row justify-between border-b pb-[26px] border-[#C0CCDA]">
          <p>Fecha:</p>
          <p className="font-semibold text-[16px]/5">
            {new Date(dataPayment?.edited_at || new Date()).toLocaleString(
              "es-ES",
              {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }
            )}
          </p>
        </div>
        <div className="text-primary font-bold text-[16px]/[16px] flex flex-row justify-between px-[10px] ">
          <p>Concepto</p>
          <p className="flex flex-row items-center font-semibold text-[16px]/5">
            Viajes & Ocio
          </p>
        </div>
      </div>
    </div>
  );
};
