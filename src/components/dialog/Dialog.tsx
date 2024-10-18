import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export function Modal({
  button,
  name,
  body,
}: {
  button: string;
  name: string;
  body: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{button}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
        </DialogHeader>
        {body}
      </DialogContent>
    </Dialog>
  );
}
