import bcrypt from "bcryptjs";

import { prisma } from "~/db.server";

export async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
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

export async function updateUser(email, firstname, lastname, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.update({
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
