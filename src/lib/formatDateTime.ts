import { parse, isValid, format } from "date-fns";

export function formatDateTime(dateStr: string, timeStr: string): string {
  const dateTimeStr = `${dateStr} ${timeStr}`;

  const parsedDate = parse(dateTimeStr, "dd-MM-yyyy HH:mm", new Date());

  if (!isValid(parsedDate)) {
    return "Fecha inválida";
  }

  return format(parsedDate, "dd/MM/yyyy HH:mm");
}
