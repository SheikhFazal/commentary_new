"use server";

import { revalidatePath } from "next/cache";
import { RoomServiceClient } from "livekit-server-sdk";


import { blockUser, unblockUser } from "@/lib/block-service";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

export const onBlock = async (id: string) => {
  // const self = await getSelf();
  const self = { id: "asfkmskdfms;lmolmgomd;fg", username: "fake user" };

  let blockedUser;

  try {
    blockedUser = await blockUser(id);
  } catch {
    // This means user is a guest
  }

  try {
    await roomService.removeParticipant(self?.id, id);
  } catch {
    // This means user is not in the room
  }

  revalidatePath(`/u/${self?.username}/community`);

  return blockedUser;
};

export const onUnblock = async (id: string) => {
  // const self = await getSelf();
  const self = { id: "asfkmskdfms;lmolmgomd;fg", username: "fake user" };
  const unblockedUser = await unblockUser(id);

  revalidatePath(`/u/${self?.username}/community`);
  return unblockedUser;
};
