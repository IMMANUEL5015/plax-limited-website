import Link from "next/link";
import { LogoMark } from "./Icons";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="PlaX Limited home">
      <LogoMark className="logo-mark" />
      <span>
        Pla<em>X</em> Limited
      </span>
    </Link>
  );
}
