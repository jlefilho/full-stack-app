import { Router, Response, Request } from "express";

export class UsersController {
  static router(): Router {
    const router = Router({
      mergeParams: true,
      strict: true,
    });

    router.get("/", (req: Request, res: Response) => {
      res.send("Gol");
    });

    return router;
  }
}
