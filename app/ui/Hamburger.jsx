
import { Menu, X } from "lucide-react";

export default function Hamburger({ open, setOpen }) {
  return (
    <div onClick={() => setOpen(!open)}>
      {open ? <></> : <Menu size={32} />}
    </div>
  );
}