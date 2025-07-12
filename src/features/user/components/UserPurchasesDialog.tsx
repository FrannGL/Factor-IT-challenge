import type { User } from "../interfaces";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDateTime } from "@/lib";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: User;
}

export function UserPurchasesDialog({ open, onOpenChange, user }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby="dialog-description" className="max-w-md">
        <DialogHeader>
          <DialogTitle>Compras de {user.firstName}</DialogTitle>
          <DialogDescription
            id="dialog-description"
            className="text-sm text-muted-foreground"
          >
            Detalle de mis compras realizadas.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[600px] pr-2">
          {user.purchases.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              No hay compras registradas.
            </p>
          ) : (
            user.purchases.map((purchase, i) => (
              <div key={purchase.ticketNumber + i} className="space-y-3">
                <div className="border p-4 rounded space-y-2">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Ticket: {purchase.ticketNumber}</span>
                    <span>
                      {formatDateTime(
                        purchase.purchaseDate,
                        purchase.purchaseTime
                      )}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {purchase.products.map((product) => (
                      <div key={product.id} className="flex items-center gap-3">
                        <img
                          src={product.colors[0]?.images[0]}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {product.category} — ${product.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end text-sm font-semibold pt-2 mt-2">
                    Total: ${purchase.total}
                  </div>
                </div>
              </div>
            ))
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
