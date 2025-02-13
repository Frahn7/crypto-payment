import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CryptoSelector from "./cryptocurrency-selector";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Spinner } from "./ui/spinner";

const X_DEVICE_ID = process.env.NEXT_PUBLIC_X_DEVICE_ID;

const formSchema = z.object({
  amount: z.coerce.number().refine((val) => val > 0, {
    message: "El importe debe ser mayor a 0",
  }),
  currency: z.string().min(1, "Selecciona una moneda"),
  concept: z.string().min(1, "El concepto es requerido"),
});

type FormValues = z.infer<typeof formSchema>;

export default function CryptoPaymentForm() {
  const router = useRouter();
  const [loading, setloading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: undefined,
      currency: "",
      concept: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (values: FormValues) => {
    setloading(true);
    fetch("https://payments.pre-bnvo.com/api/v1/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Device-Id": X_DEVICE_ID!,
      },
      body: JSON.stringify({
        expected_output_amount: values.amount,
        input_currency: values.currency,
      }),
    })
      .then((res) => res.json())
      .then((data) => router.push(`/resume?${data.identifier}`));
  };

  return (
    <Card className="w-[609px] mx-auto">
      <CardHeader>
        <CardTitle className="text-[30px]/[38px] text-primary text-center font-bold">
          Crear pago
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] text-primary">
                    Importe a pagar
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      placeholder="Añade importe a pagar"
                      {...field}
                      onChange={(e) => {
                        field.onChange(parseFloat(e.target.value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] text-primary flex items-center gap-2">
                    Seleccionar moneda
                    <TooltipProvider>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger>
                          <Image
                            src="/icons/info.svg"
                            alt="Info"
                            width={16}
                            height={16}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Selecciona la moneda que deseas usar para el pago.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </FormLabel>

                  <FormControl>
                    <CryptoSelector
                      onSelect={field.onChange}
                      selectedCurrency={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="concept"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] text-primary">
                    Concepto
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Añade descripción del pago"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {loading ? (
              <div className="flex justify-center">
                <Spinner />
              </div>
            ) : (
              <Button
                type="submit"
                className="w-full bg-[#035AC5] hover:bg-[#035AC5]/90 disabled:bg-[#C6DFFE] disabled:cursor-not-allowed"
                disabled={
                  !form.formState.isValid ||
                  form.formState.isSubmitting ||
                  loading
                }
              >
                Continuar
              </Button>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
