import { Request, Response } from "express";
import PizzaBusiness from "../business/PizzaBusiness";
import { GetPizzas } from "../model/Pizza";

export class PizzaController {
  constructor(protected pizzaBusiness: PizzaBusiness) {}

  public createPizza = async (req: Request, res: Response) => {
    try {
      const input: any = {
        token: req.headers.authorization,
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
      };

      const response = await this.pizzaBusiness.createPizza(input);

      res.status(200).send(response);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };
  public getPizzas = async (req: Request, res: Response) => {
    try {
      const input: GetPizzas = {
        token: req.headers.authorization,
        search: req.query.search as string,
        order: req.query.order as string,
        sort: req.query.sort as string,
        limit: req.query.limit as string,
        page: req.query.page as string,
      };

      const response = await this.pizzaBusiness.getPizzas(input);

      res.status(200).send(response);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };
  public editPizza = async (req: Request, res: Response) => {
    try {
      const input: any = {
        token: req.headers.authorization,
        id: req.params.id,
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
      };

      const response = await this.pizzaBusiness.editPizzaStatus(input);

      res.status(200).send(response);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };
}
