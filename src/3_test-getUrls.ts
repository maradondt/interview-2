/**
 * Implement the function that will execute a callback with the data
 * and return an array of responses Response[].
 * The solution should execute all requests in parallel
 * but no more than [limit] requests can be executed concurrently.
 * The goal is to minimize the total execution time.
 *
 * Use the asyncFetch function as a replacement for fetch.
 */

type Props<T, R> = {
  callback: (args: T) => Promise<R>;
  data: Array<T>;
  limit: number;
};
/**               Решение задачи                */
export function runWithLimit<T, R>({ callback, data, limit }: Props<T, R>): Promise<R[]> {
  const result: R[] = [];
  // /** START SOLUTION HERE */

  return Promise.resolve(result);
}
