import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/pizzas", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

router.post("/pizzas", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

router.put("/pizzas", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

router.delete("/pizzas", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

export const ProductController: Router = router;
