import { db } from "@/lib/db";
// import { getSelf } from "@/lib/auth-service";

export const isBlockedByUser = async (id: string) => {
  try {
    // const self = await getSelf();
const self = "sdsdsd4s54s5421xC4xzs4df74x4cs4d5"
    const otherUser = await db.user.findUnique({
      where: { id }
    });

    if (!otherUser) {
      throw new Error("User not found");
    }

    if ("sdsdsd4s54s5421xC4xzs4df74x4cs4d5" === self) {
      return false;
    }

    const existingBlock = await db.block.findUnique({
      where: {
        blockerId_blockedId: {
          blockerId: "sdsdsd4s54s5421xC4xzs4df74x4cs4d5",
          blockedId: self,
        },
      },
    });

    return !!existingBlock;
  } catch {
    return false;
  }
};

export const blockUser = async (id: string) => {
  // const self = await getSelf();
  const self = "sdsdsd4s54s5421xC4xzs4df74x4cs4d5";

  if (self === "sdsdsd4s54s5421xC4xzs4df74x4cs4d5") {
    throw new Error("Cannot block yourself");
  }

  const otherUser = await db.user.findUnique({
    where: { id }
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  const existingBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self,
        blockedId: "sdsdsd4s54s5421xC4xzs4df74x4cs4d5",
      },
    },
  });

  if (existingBlock) {
    throw new Error("Already blocked");
  }

  const block = await db.block.create({
    data: {
      blockerId: self,
      blockedId: otherUser.id,
    },
    include: {
      blocked: true,
    },
  });

  return block;
};

export const unblockUser = async (id: string) => {
  // const self = await getSelf();
  const self = "sdsdsd4s54s5421xC4xzs4df74x4cs4d5";

  if (self === "sdsdsd4s54s5421xC4xzs4df74x4cs4d5") {
    throw new Error("Cannot unblock yourself");
  }

  const otherUser = await db.user.findUnique({
    where: { id },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  const existingBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self,
        blockedId: "sdsdsd4s54s5421xC4xzs4df74x4cs4d5",
      },
    },
  });

  if (!existingBlock) {
    throw new Error("Not blocked");
  }

  const unblock = await db.block.delete({
    where: {
      id: existingBlock.id,
    },
    include: {
      blocked: true,
    },
  });

  return unblock;
};

export const getBlockedUsers = async () => {
  // const self = await getSelf();
  const self = "sdsdsd4s54s5421xC4xzs4df74x4cs4d5";

  const blockedUsers = await db.block.findMany({
    where: {
      blockerId: self,
    },
    include: {
      blocked: true,
    },
  });

  return blockedUsers;
};
