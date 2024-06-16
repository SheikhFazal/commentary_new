// import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";

import { UrlCard } from "./_components/url-card";
import { KeyCard } from "./_components/key-card";
import { ConnectModal } from "./_components/connect-modal";
import { ROLE } from "@/app/enums/role";
import { notFound } from "next/navigation";

const KeysPage = () => {
  // const self = await getSelf();
  const user = { role: "COMMENTATOR" };
  // const stream: any = await getStreamByUserId("515d4s84d51fd84fd51f6df");
  const stream: any = "515d4s84d51fd84fd51f6df";

  if (!stream) {
    throw new Error("Stream not found");
  }
  if (user?.role !== ROLE?.COMMENTATOR) return notFound();
  return (
    <div className="p-6">
      <div className="flex flex-wrap items-center gap-4 justify-between mb-4">
        <h1 className="text-2xl font-bold">Keys & URLs</h1>
        <ConnectModal />
      </div>
      <div className="space-y-4">
        <UrlCard value={stream?.serverUrl} />
        <KeyCard value={stream?.streamKey} />
      </div>
    </div>
  );
};

export default KeysPage;
