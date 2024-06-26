/**
 * Implement the function that will query the URLs
 * and return an array of responses [ResponseDataType, ResponseDataType, ...].
 * The solution should execute all requests in parallel
 * but no more than [limit] requests can be executed concurrently.
 * The goal is to minimize the total execution time.
 *
 * Use the asyncFetch function as a replacement for fetch.
 */
interface ResponseDataType {
  delay: number;
  data: string;
}
const asyncFetch = (url: string) =>
  new Promise<ResponseDataType>((resolve) => {
    const delay = Math.random() * 1000;
    setTimeout(() => {
      resolve({ delay, data: 'result' + url });
    }, delay);
  });

const urlsToFetch = Array(30)
  .fill((i: number) => `/${i}/aadt`)
  .map((fn, index) => fn(index));

/**               Решение задачи                */
const paralellUploading = (urls: string[], parallelLimit: number): Promise<ResponseDataType[]> => {
  /** START SOLUTION HERE */

  return Promise.resolve([]);
};

paralellUploading(urlsToFetch, 3).then((x) => console.log('3_test-getUrls.ts', x));
