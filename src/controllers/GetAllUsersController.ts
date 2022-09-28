import { Request, Response } from "express";
import { createConnection } from "../postgres";

export class GetAllUsersController {
  async handle(request: Request, response: Response) {
    const clientConnection = await createConnection();

    console.time();

    const { rows } = await clientConnection.query("SELECT * FROM USERS");

    console.timeEnd();

    return response.json(rows);
  }
}
