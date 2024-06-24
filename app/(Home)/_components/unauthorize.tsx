import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Unauthorize = () => {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">401</h1>
      <p>You are Unauthorize to this page</p>
      <Button variant="secondary"  onClick={() => router.back()}>
        {/* <Link href="/">Go back home</Link> */}
        Go back
      </Button>
    </div>
  );
};

export default Unauthorize;
