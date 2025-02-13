import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCurrencies } from "@/hooks/useCurrencies";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { Loader2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface CryptoSelectorProps {
  onSelect: (currency: string) => void;
  selectedCurrency: string;
}

export default function CryptoSelector({
  onSelect,
  selectedCurrency,
}: CryptoSelectorProps) {
  const { data: currencies = [], isLoading } = useCurrencies();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.name.toLowerCase().includes(search.toLowerCase()) ||
      currency.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Select value={selectedCurrency} onOpenChange={setOpen} open={false}>
        <SelectTrigger>
          <SelectValue
            placeholder={
              <span className="text-muted-foreground">
                Selecciona una moneda
              </span>
            }
          />
        </SelectTrigger>
        <SelectContent>
          {currencies.map((currency) => (
            <SelectItem value={currency.symbol} key={currency.name}>
              <div className="flex items-center gap-2">
                <Image
                  src={currency.image}
                  alt={currency.name}
                  width={20}
                  height={20}
                />
                {currency.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[673px] p-0  min-h-[500px] flex flex-col gap-2">
          <DialogHeader className="p-6 pb-0 space-y-4">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-primary text-lg/[22px] font-bold">
                Seleccionar criptomoneda
              </DialogTitle>
              <DialogClose
                onClick={() => setOpen(false)}
                className="rounded-sm opacity-90 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <X className="size-[22px] text-primary" strokeWidth={1.5} />
                <span className="sr-only">Close</span>
              </DialogClose>
            </div>
            <div className="relative">
              <Image
                src="/icons/search.svg"
                alt="Search"
                width={20}
                height={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              />
              <Input
                placeholder="Buscar"
                className="pl-10 h-[48px] shadow-none placeholder:text-[#647184] text-primary tracking-[1%] text-sm/5"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </DialogHeader>
          <div className=" pt-2 pb-6 px-6 flex flex-col gap-[22px]">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="size-4 animate-spin" />
              </div>
            ) : (
              filteredCurrencies.map((crypto) => (
                <div
                  key={crypto.symbol}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-accent cursor-pointer w-[625px] h-[52px] hover:bg-[#EFF2F7]"
                  onClick={() => {
                    onSelect(crypto.symbol);
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center">
                      <Image
                        src={crypto.image}
                        alt={crypto.name}
                        width={32}
                        height={32}
                        className="rounded-full "
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-primary text-base/5 tracking-[1%]">
                        {crypto.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {crypto.symbol}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedCurrency === crypto.symbol ? (
                      <Image
                        src="/icons/check.svg"
                        alt="Check"
                        width={14}
                        height={14}
                      />
                    ) : (
                      <Image
                        src="/icons/chevron-right.svg"
                        alt="Chevron right"
                        width={16}
                        height={16}
                      />
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
