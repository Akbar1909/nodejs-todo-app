const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class Todo {
  static async getAll() {
    try {
      const data = await prisma.todo.findMany();

      return {
        status: "success",
        data,
        error: null,
      };
    } catch (e) {
      return {
        status: "error",
        data: null,
        error: e.message,
      };
    }
  }

  static async getById(id) {
    try {
      const data = await prisma.todo.findUnique({ where: { id: Number(id) } });

      if (!data) {
        return {
          status: "success",
          data: null,
          error: "Couldn't find",
        };
      }

      return {
        status: "success",
        data,
        error: null,
      };
    } catch (e) {
      return {
        status: "error",
        data: null,
        error: e.message,
      };
    }
  }

  static async create(data) {
    try {
      const todo = await prisma.todo.create({ data });
      return {
        status: "success",
        data: todo,
        error: null,
      };
    } catch (e) {
      return {
        status: "error",
        data: null,
        error: null,
      };
    }
  }

  static async update(id, data) {
    try {
      const updateData = await prisma.todo.update({
        where: {
          id: Number(id),
        },
        data,
      });

      if (!updateData) {
        return {
          status: "error",
          data: null,
          error: "not found",
        };
      }

      return {
        status: "success",
        data: updateData,
        error: null,
      };
    } catch (e) {
      return {
        status: "error",
        data: null,
        error: e.message,
      };
    }
  }

  static async removeById(id) {
    try {
      const removeData = await prisma.todo.delete({
        where: { id: Number(id) },
      });

      return {
        status: "success",
        data: removeData,
        error: null,
      };
    } catch (e) {
      return {
        status: "error",
        data: null,
        error: e.message,
      };
    }
  }
}

module.exports = Todo;
