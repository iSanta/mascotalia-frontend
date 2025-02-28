import { httpGet } from "@/Application/http";
import { RecentEntries } from "@/Domain/blog/RecentEntries";
import { CommonResponse } from "@/Domain/common/CommonResponse";

const getRecentEntries = async () => {
  return (await httpGet<CommonResponse<RecentEntries[]>>({
    url: `${process.env.NEXT_PUBLIC_URL}v1/Blog/Recent-Entries`,
  })).data;
};

export { getRecentEntries };
