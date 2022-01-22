import Link from "next/link";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <Loader show />
      <Link href="#">link</Link>
    </div>
  );
}
