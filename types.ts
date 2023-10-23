import { Server as NetServer, Socket } from "net";
import { Server, Member, Profile } from "@prisma/client";
import { NextApiResponse } from "next";
import { Server as SocketIoServer } from "socket.io";

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIoServer;
    };
  };
};

