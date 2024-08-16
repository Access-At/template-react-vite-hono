import { RequestService } from "@/lib/requestService";
import { ZodType, ZodTypeDef } from "zod";

export async function GET<T>(url: string, schema: ZodType<unknown, ZodTypeDef, unknown>) {
  const requestService = new RequestService({
    url,
    method: "GET",
    schema,
  });
  const response = await requestService.sendRequest();

  return response as T;
}
