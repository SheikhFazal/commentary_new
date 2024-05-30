import { format } from "date-fns";

import { getBlockedUsers } from "@/lib/block-service";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

const CommunityPage = async () => {
  // const blockedUsers = await getBlockedUsers();
  const blockedUsers = [
    {
      id: "string",
      username: "block user 1",
      imageUrl: "img",
      externalUserId: "externalstringId",
      bio: "This is Bio",
      createdAt: "02/10/2015",
      updatedAt: "02/10/2015",
    },
    {
      id: "string2",
      username: "block user 2",
      imageUrl: "img2",
      externalUserId: "",
      bio: "This is Bio",
      createdAt: "02/10/2015",
      updatedAt: "02/10/2015",
    },
  ];

  const formattedData = blockedUsers.map((block) => ({
    ...block,
    userId: block?.id,
    imageUrl: block?.imageUrl,
    username: block?.username,
    createdAt: format(new Date(block?.createdAt), "dd/MM/yyyy"),
  }));

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Community Settings</h1>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
};

export default CommunityPage;
