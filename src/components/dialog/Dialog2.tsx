import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
export function Modal2({
  button,
  name,
  body,
}: {
  button: React.ReactNode;
  name: string;
  body: React.ReactNode;
}) {
  return (
    <ScrollArea className="rounded-md border">
      <Dialog>
        <DialogTrigger asChild>{button}</DialogTrigger>
        <DialogContent className="sm:max-w-[800px] lg:max-w-[1200px] lg:my-3">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          {body}
        </DialogContent>
      </Dialog>
    </ScrollArea>
  );
}
