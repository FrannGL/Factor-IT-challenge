import { useState } from "react";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCartStore } from "@/features/cart/store/useCartStore";

export function DatePicker() {
  const [open, setOpen] = useState(false);
  const selectedDate = useCartStore((state) => state.selectedDate);
  const setSelectedDate = useCartStore((state) => state.setSelectedDate);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!selectedDate}
          className={cn(
            "w-full justify-start text-left font-normal cursor-pointer",
            "data-[empty=true]:text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? (
            format(selectedDate, "dd-MM-yyyy")
          ) : (
            <span>Elegí una fecha</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate ?? undefined}
          captionLayout="dropdown"
          onSelect={(date) => {
            if (date) {
              setSelectedDate(date);
              setOpen(false);
            }
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
