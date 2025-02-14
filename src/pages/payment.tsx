import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Payment = ({
  title = "¡Pago completado!",
  image = "/icons/green-check.svg",
}: {
  title: string;
  image: string;
}) => {
  const [Pay, setPay] = useState("");
  const route = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setPay(urlParams.keys().next().value as string);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="shadow-lg rounded-[16px]">
        <div className="p-[32px] flex flex-col gap-4 text-center items-center ">
          <Image
            alt="check"
            src={Pay == "RE" ? "/icons/red-check.svg" : image}
            width={80}
            height={80}
          />
          <p className="font-bold text-xl/[25px] text-primary">
            {Pay == "RE" ? "¡Pago cancelado!" : title}
          </p>
          <p className="w-[360px] text-[#647184]">
            Lorem ipsum dolor sit amet consectetur. Laoreet blandit auctor et
            varius dolor elit facilisi enim. Nulla ut ut eu nunc.
          </p>
          <Button
            type="submit"
            className=" bg-[#035AC5] hover:bg-[#035AC5]/90 disabled:bg-[#C6DFFE] disabled:cursor-not-allowed w-[426px] h-[56px] mt-[45.5px]"
            onClick={() => route.push("/")}
          >
            Crear nuevo pago
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
