/**
 * Implement the function that will execute a callback with the data
 * and return an array of responses Response[].
 * The solution should execute all requests in parallel
 * but no more than [limit] requests can be executed concurrently.
 * The goal is to minimize the total execution time.
 *
 * Use the asyncFetch function as a replacement for fetch.
 */

type Props<RequestData, Response> = {
  callback: (args: RequestData) => Promise<Response>;
  data: Array<RequestData>;
  limit: number;
};
/**               Решение задачи                */
export function runWithLimit<RequestData, Response>({
  callback,
  data,
  limit,
}: Props<RequestData, Response>): Promise<Response[]> {
  /** START SOLUTION HERE */
  const result: Response[] = [];

  return Promise.resolve([]);
}
