import { Request, Response } from "express";
import { createConnection } from "../postgres";

export class GetUserInfoController {
  async handle(request: Request, response: Response) {
    const { userId } = request;

    const clientConnection = await createConnection();

    console.time();

    const { rows } = await clientConnection.query(
      `SELECT * FROM USERS WHERE ID  = $1 LIMIT 1`,
      [userId]
    );

    console.timeEnd();

    return response.json(rows[0]);
  }
}
