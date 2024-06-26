// import { getSelf } from "@/lib/auth-service";
// import { getStreamByUserId } from "@/lib/stream-service";

import { ToggleCard } from "./_components/toggle-card";

const ChatPage =  () => {
  // const self = await getSelf();
  // const stream = await getStreamByUserId(self.id);
  const stream = {}

  if (!stream) {
    throw new Error("Stream not found");
  }

  return ( 
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">
          Chat settings
        </h1>
      </div>
      <div className="space-y-4">
        <ToggleCard
          field="isChatEnabled"
          label="Enable chat"
          // value={stream.isChatEnabled}
          value={true}
        />
        <ToggleCard
          field="isChatDelayed"
          label="Delay chat"
          // value={stream.isChatDelayed}
          value={true}
        />
        <ToggleCard
          field="isChatFollowersOnly"
          label="Must be following to chat"
          // value={stream.isChatFollowersOnly}
          value={true}
        />
      </div>
    </div>
  );
};
 
export default ChatPage;