import { notFound } from "next/navigation";

// import { getUserByUsername } from "@/lib/user-service";
// import { isFollowingUser } from "@/lib/follow-service";
// import { isBlockedByUser } from "@/lib/block-service";
import { StreamPlayer } from "@/components/stream-player";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  // const user = await getUserByUsername(params.username);

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
    _count: {
      followedBy: 786,
    },
  };

  if (!user || !user?.stream) {
    notFound();
  }

  // const isFollowing = await isFollowingUser(user?.id);
  const isFollowing = true;
  // const isBlocked = await isBlockedByUser(user?.id);
  const isBlocked = true;

  if (isBlocked) {
    notFound();
  }

  return (
    <StreamPlayer user={user} stream={user.stream} isFollowing={isFollowing} />
  );
};

export default UserPage;
