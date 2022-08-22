import { NextApiRequest, NextApiResponse } from "next";

export type HandlerFunction = (
  req: NextApiRequest,
  res: NextApiResponse
) => unknown | Promise<unknown>;

interface RouteArgs {
  req: NextApiRequest;
  res: NextApiResponse;
  post?: HandlerFunction;
  get?: HandlerFunction;
  delete?: HandlerFunction;
  put?: HandlerFunction;
  head?: HandlerFunction;
  options?: HandlerFunction;
}

// TODO: restrict calls to own server only
export function route(routeArgs: RouteArgs): Promise<unknown> {
  const { req, res } = routeArgs;
  const handlerFunction = req.method
    ? // @ts-ignore
      routeArgs[req.method.toLowerCase()]
    : undefined;
  try {
    if (handlerFunction) {
      return handlerFunction(req, res);
    } else {
      // if no handler than route does not exists
      res.status(404).end();
    }
  } catch (e) {
    console.error(`BFF Errored in [${req.method} ${handlerFunction.name}]`, e);
    // TODO: using 500 in case of unknown errors - we need another page for it,
    //  or some other less intrusive treatment, i.e. a message
    res.status(404).end();
  }

  return Promise.resolve();
}
