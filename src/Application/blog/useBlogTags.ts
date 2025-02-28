import { useEffect, useState } from "react";
import useBlog from "./useBlog";
import useQueryParams from "../query-params/useQueryParams";

const useBlogTags = () => {
  const { getBlogsByTagAsync, getBlogsAsync, setBlogRequestData } = useBlog();
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [emptyTag, setEmptyTag] = useState<boolean>(false);
  const { getParam } = useQueryParams();

  useEffect(() => {
    selectedTags.length
      ? (setBlogRequestData(selectedTags), getBlogsByTagAsync(selectedTags, "1"), setEmptyTag(true))
      : emptyTag && getBlogsAsync("1");
  }, [selectedTags]);

  const setTags = (id: number) => {
    setSelectedTags((prevSelectedTags) => {
      const indice = prevSelectedTags.indexOf(id);
      return indice !== -1
        ? prevSelectedTags.filter((tag) => tag !== id)
        : [...prevSelectedTags, id];
    });
  };

  return {
    setTags,
    selectedTags,
  };
};

export default useBlogTags;
