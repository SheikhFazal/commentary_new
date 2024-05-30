import React from "react";
import { notFound } from "next/navigation";
import { StreamPlayer } from "@/components/stream-player";
import { ROLE } from "@/app/enums/role";
const CommentatorStream = () => {
  const customStream = {
    id: "stringsekljeirjfjlijefnjf_snh",
    isChatEnabled: true,
    isChatDelayed: true,
    isChatFollowersOnly: true,
    isLive: true,
    thumbnailUrl: "string",
    name: "John Smith Stream",
  };

  const user: any = {
    id: "string34s4f53g16d8fg",
    username: "John Smith",
    bio: "string bio",
    stream: customStream,
    imageUrl: "string",
    role: "COMMENTATOR",
    _count: {
      followedBy: 786,
    },
  };
  if (user?.role !== ROLE?.COMMENTATOR) return notFound();

  if (!user || !user?.stream) {
    notFound();
  }

  // const isFollowing = await isFollowingUser(user?.id);
  const isFollowing = true;
  // const isBlocked = await isBlockedByUser(user?.id);
  const isBlocked = false;

  if (isBlocked) {
    notFound();
  }

  return (
    <div className="">Commentator Streams</div>
    // <StreamPlayer user={user} stream={user.stream} isFollowing={isFollowing} />
  );
};

export default CommentatorStream;
