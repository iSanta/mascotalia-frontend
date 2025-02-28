import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const getParams = () => {
    return params.toString();
  };

  const getParam = (name: string): string | null => {
    return params.get(name);
  };

  const setParms = (name: string, value: string) => {
    params.set(name, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  const deleteParam = (name: string) => {
    params.delete(name);
    router.push(`${pathname}?${params.toString()}`);
  };

  const clearParams = () => {
    router.push(`${pathname}`);
  };

  return {
    setParms,
    getParam,
    deleteParam,
    getParams,
    clearParams,
  };
};

export default useQueryParams;
