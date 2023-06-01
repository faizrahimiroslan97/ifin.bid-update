import { prisma } from "~/db.server";

export function getApply({ id, userId }) {
  return prisma.apply.findFirst({
    select: { id: true, type:true },
    where: { id, userId },
  });
}

export function getApplyListItems({ userId }) {
  return prisma.apply.findMany({
    where: { userId },
    select: { id: true, type: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createApply({ type,  userId }) {
  return prisma.apply.create({
    data: {
      type,
      user: {        
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteApply({ id, userId }) {
  return prisma.apply.deleteMany({
    where: { id, userId },
  });
}