"use server";

import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
// import { getSelf } from "@/lib/auth-service";

export const updateUser = async (values: Partial<User>) => {
  // const self = await getSelf();
  const self = { id: "asfkmskdfms;lmolmgomd;fg", username: "fake user" };

  const validData = {
    bio: values.bio,
  };

  const user = await db.user.update({
    where: { id: self.id },
    data: { ...validData },
  });

  revalidatePath(`/${self.username}`);
  revalidatePath(`/u/${self.username}`);

  return user;
};
