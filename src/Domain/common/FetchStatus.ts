export type FetchStatus = {
  status: "idle" | "loading" | "succeeded" | "failed";
  errorMessage: string | undefined;
};
