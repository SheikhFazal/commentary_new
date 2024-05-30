"use client";

import { Stream, User } from "@prisma/client";
import { LiveKitRoom } from "@livekit/components-react";

import { cn } from "@/lib/utils";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { useViewerToken } from "@/hooks/use-viewer-token";

import { InfoCard } from "./info-card";
import { AboutCard } from "./about-card";
import { ChatToggle } from "./chat-toggle";
import { Chat, ChatSkeleton } from "./chat";
import { Video, VideoSkeleton } from "./video";
import { Header, HeaderSkeleton } from "./header";

type CustomStream = {
  id: string;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
  isLive: boolean;
  thumbnailUrl: string | null;
  name: string;
};

type CustomUser = {
  id: string;
  username: string;
  bio: string | null;
  stream: CustomStream | null;
  imageUrl: string;
  _count: { followedBy: number }
};

interface StreamPlayerProps {
  user: CustomUser;
  stream: CustomStream;
  isFollowing: boolean;
}

export const StreamPlayer = ({
  user,
  stream,
  isFollowing
}: StreamPlayerProps) => {
  const {
    token="skdjndasd5s4d5s4d2s1ds5",
    name="John Smith",
    identity="true84848",
  } = useViewerToken("skdjndasd5s4d5s4d2s1ds5");
  const { collapsed } = useChatSidebar((state) => state);

  if (!token || !name || !identity) {
    return <StreamPlayerSkeleton />
  }

  return (
    <>
      {collapsed && (
        <div className="hidden lg:block fixed top-[100px] right-2 z-50">
          <ChatToggle />
        </div>
      )}
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className={cn(
          "grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full",
          collapsed && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
        )}
      >
        <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
          <Video
            hostName={user?.username}
            hostIdentity={"id56568453584354874wewe"}
          />
          <Header
            hostName={user?.username}
            hostIdentity={"id56568453584354874wewe"}
            viewerIdentity={"identity"}
            imageUrl={"url"}
            isFollowing={isFollowing}
            name={stream?.name}
          />
          <InfoCard
            hostIdentity={"id56568453584354874wewe"}
            viewerIdentity={"identity"}
            name={stream?.name}
            thumbnailUrl={"stream.thumbnailUrl"}
          />
          <AboutCard
            hostName={user?.username}
            hostIdentity={"id56568453584354874wewe"}
            viewerIdentity={"identity"}
            bio={user?.bio}
            followedByCount={user?._count?.followedBy}
          />
        </div>
        <div
          className={cn(
            "col-span-1",
            collapsed && "hidden"
          )}
        >
          <Chat
            viewerName={"name"}
            hostName={user?.username}
            hostIdentity={"id56568453584354874wewe"}
            isFollowing={isFollowing}
            isChatEnabled={true}
            isChatDelayed={true}
            isChatFollowersOnly={true}
          />
        </div>
      </LiveKitRoom>
    </>
  );
};

export const StreamPlayerSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full">
      <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
        <VideoSkeleton />
        <HeaderSkeleton />
      </div>
      <div className="col-span-1 bg-background">
        <ChatSkeleton />
      </div>
    </div>
  )
}