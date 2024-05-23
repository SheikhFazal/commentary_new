import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div
      className=" lg:col-span-7 md:col-span-6 md:block hidden  "
      style={{ backgroundImage: `url(${"/auth-layout-pic.png"})`, backgroundSize:"100% 100%"}}
    >
      <div className=" pt-[330px] h-screen flex flex-col gap-3 justify-center items-center ">
        <Image
          src="/CommenTray_logo 1.png"
          alt="Commentray"
          height="150"
          width="260"
        />
        <p className="text-5xl font-bold text-center leading-tight">
          All you love in <br /> one place
        </p>
      </div>
      {/* <div className={cn(
        "flex flex-col items-center",
        font.className,
      )}>
        <p className="text-xl font-semibold">
          Gamehub
        </p>
        <p className="text-sm text-muted-foreground">
          Let&apos;s play
        </p>
      </div> */}
    </div>
  );
};
