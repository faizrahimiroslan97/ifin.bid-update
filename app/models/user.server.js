import bcrypt from "bcryptjs";

import { prisma } from "~/db.server";

export async function getUserById(id) {
  return prisma.user.findUnique({
    where: { id },
    include: {
      profile: true,
    },
  });
}

export async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(email, firstname, lastname, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      firstname,
      lastname,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
      profile: {
        create: {
          phone: "",
          account: "",
          birthdate: "",
          address1: "",
          address2: "",
          country: "",
          state: "",
          postalcode: "",
          city: "",
        },
      },
    },
  });
}

export async function updateUser(userId) {
  return prisma.user.update({
    where: {
      id: userId.userId,
    },
    data: {
      email: userId.email,
      firstname: userId.firstname,
      lastname: userId.lastname,
      profile: {
        update: {
          where: {
            id: userId.profile.id,
          },
          data: {
            phone: userId.phone,
            account: userId.account,
            birthdate: userId.birthdate,
            address1: userId.address1,
            address2: userId.address2,
            country: userId.country,
            state: userId.state,
            postalcode: userId.postalcode,
            city: userId.city,
          },
        },
      },
    },
  });
}

export async function deleteUserByEmail(email) {
  return prisma.user.delete({ where: { email } });
}

export async function verifyLogin(email, password) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.password.hash
  );

  if (!isValid) {
    return null;
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
}
