import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await currentProfile();
    const { name, imageUrl } = await req.json();

    if (!profile) return new NextResponse("Unathorized", { status: 401 });

    const server = await db.server.update({
      where: {
        id: params.serverId,
      },
      data: {},
    });
  } catch (error) {
    console.log("SERVER_ID_PATCH", error);
    return new NextResponse("Iternal Error", { status: 500 });
  }
}
