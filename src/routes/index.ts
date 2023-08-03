import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from "fastify";

interface IQueryString {
  name: string;
}

interface CustomRouteGenericQuery {
  Querystring: IQueryString;
}

interface IParams {
  name: string;
}

interface CustomRouteGenericParam {
  Params: IParams;
}

const routes: FastifyPluginAsync = async (server) => {
  server.register(
    async (instance: FastifyInstance, opts: FastifyServerOptions, done) => {
      instance.get(
        "/",
        async (
          req: FastifyRequest<CustomRouteGenericQuery>,
          res: FastifyReply
        ) => {
          const { name = "" } = req.query;
          res.status(200).send(`Hello ${name}`);
        }
      );

      instance.get(
        "/:name",
        async (
          req: FastifyRequest<CustomRouteGenericParam>,
          res: FastifyReply
        ) => {
          const { name = "" } = req.params;
          res.status(200).send(`Hello ${name}`);
        }
      );
      done();
    },
    {
      prefix: "/hello",
    }
  );
};

export default routes;
