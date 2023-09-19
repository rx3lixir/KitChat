import { currentUser, redirectToSignIn } from "@clerk/nextjs/server";
import { db } from "@/lib//db";

export const initialProfile = async () => {
  // Marking current user with Clerk id
  const user = await currentUser();

  if (!user) return redirectToSignIn();

  // Trying to find an existing profile with clerk id
  const profile = await db.profile.findUnique({
    where: { userId: user.id },
  });

  // Returning existing profile
  if (profile) return profile;

  // Creating new profile
  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      ImageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newProfile;
};
