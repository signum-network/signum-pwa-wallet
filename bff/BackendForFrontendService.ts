import { Http, HttpClientFactory } from "@signumjs/http";
import { IncomingMessage } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
export class BackendForFrontendService {
  private http: Http;

  constructor(req: IncomingMessage & { cookies: NextApiRequestCookies }) {
    const host = req.headers.host || "localhost:3000";
    const protocol = /^localhost|^0\.0\.0\.0|^127\.0\.0\.1/.test(host)
      ? "http"
      : "https";
    const baseUrl = `${protocol}://${host}/api`;
    this.http = HttpClientFactory.createHttpClient(baseUrl);
  }

  async get<T>(url: string): Promise<T | undefined> {
    try {
      const { response } = await this.http.get(url);
      return response;
    } catch (e: any) {
      console.error(e);
      return;
    }
  }
}
