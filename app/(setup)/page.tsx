import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
  // Loading an existing or new created profile
  const profile = await initialProfile();

  // Searching first server for user-member on main page
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  // Redirecting to server we found previusliy
  if (server) redirect(`/servers/${server.id}`);

  // Or to create new one
  return <InitialModal />;
};

export default SetupPage;
