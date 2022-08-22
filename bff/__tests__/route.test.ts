import { route } from "../route";

describe("route", () => {
  it("should route to correct handler - GET", async () => {
    const getHandler = jest.fn(() => Promise.resolve("some value"));
    const postHandler = jest.fn(() => Promise.resolve());
    const deleteHandler = jest.fn(() => Promise.resolve());
    const putHandler = jest.fn(() => Promise.resolve());

    const routeArgs = {
      req: { method: "GET" },
      res: {},
      get: getHandler,
      delete: deleteHandler,
      put: putHandler,
      post: postHandler,
    };

    // @ts-ignore
    await route(routeArgs);

    expect(getHandler).toBeCalled();
    expect(putHandler).not.toBeCalled();
    expect(postHandler).not.toBeCalled();
    expect(deleteHandler).not.toBeCalled();

    getHandler.mockReset();
  });
  it("should route to correct handler - POST", async () => {
    const getHandler = jest.fn(() => Promise.resolve());
    const postHandler = jest.fn(() => Promise.resolve());
    const deleteHandler = jest.fn(() => Promise.resolve());
    const putHandler = jest.fn(() => Promise.resolve());

    const routeArgs = {
      req: { method: "POST" },
      res: {},
      get: getHandler,
      delete: deleteHandler,
      put: putHandler,
      post: postHandler,
    };

    // @ts-ignore
    await route(routeArgs);
    expect(getHandler).not.toBeCalled();
    expect(putHandler).not.toBeCalled();
    expect(postHandler).toBeCalled();
    expect(deleteHandler).not.toBeCalled();
  });
  it("should route to correct handler - PUT", async () => {
    const getHandler = jest.fn(() => Promise.resolve());
    const postHandler = jest.fn(() => Promise.resolve());
    const deleteHandler = jest.fn(() => Promise.resolve());
    const putHandler = jest.fn(() => Promise.resolve());

    const routeArgs = {
      req: { method: "PUT" },
      res: {},
      get: getHandler,
      delete: deleteHandler,
      put: putHandler,
      post: postHandler,
    };

    // @ts-ignore
    await route(routeArgs);
    expect(getHandler).not.toBeCalled();
    expect(putHandler).toBeCalled();
    expect(postHandler).not.toBeCalled();
    expect(deleteHandler).not.toBeCalled();
  });
  it("should route to correct handler - DELETE", async () => {
    const getHandler = jest.fn(() => Promise.resolve());
    const postHandler = jest.fn(() => Promise.resolve());
    const deleteHandler = jest.fn(() => Promise.resolve());
    const putHandler = jest.fn(() => Promise.resolve());

    const routeArgs = {
      req: { method: "DELETE" },
      res: {},
      get: getHandler,
      delete: deleteHandler,
      put: putHandler,
      post: postHandler,
    };

    // @ts-ignore
    await route(routeArgs);
    expect(getHandler).not.toBeCalled();
    expect(putHandler).not.toBeCalled();
    expect(postHandler).not.toBeCalled();
    expect(deleteHandler).toBeCalled();
  });
  it("should abort call with error code 404 if method is not supported", async () => {
    const postHandler = jest.fn(() => Promise.resolve());
    const statusEndFn = jest.fn();
    const routeArgs = {
      req: { method: "GET" },
      res: { status: jest.fn(() => ({ end: statusEndFn })) },
      post: postHandler,
    };

    // @ts-ignore
    await route(routeArgs);
    expect(postHandler).not.toBeCalled();
    expect(routeArgs.res.status).toBeCalledWith(404);
    expect(statusEndFn).toBeCalled();
  });
});
