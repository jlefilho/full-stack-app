import { Router, Response, Request, NextFunction } from "express";
import { UserService } from "../services/user.service";

export class UsersController {
  static router(): Router {
    const router = Router({
      mergeParams: true,
      strict: true,
    });

    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new UserService()
        .listAll()
        .then((result) => res.status(200).json(result))
        .catch(next);
    });

    router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
      new UserService()
        .getById(req.params.id)
        .then((result) => res.status(200).json(result))
        .catch(next);
    });

    router.post("/", (req: Request, res: Response, next: NextFunction) => {
      new UserService()
        .create(req.body)
        .then((result) => res.status(201).json(result))
        .catch(next);
    });

    router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
      new UserService()
        .update(req.params.id, req.body)
        .then((result) => res.status(204).json(result))
        .catch(next);
    });

    router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
      new UserService()
        .delete(req.params.id)
        .then(() => res.status(202).send())
        .catch(next);
    });

    return router;
  }
}
