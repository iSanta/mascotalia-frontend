"use client";
import { Button, Typography } from "@/Presentation/design-system";
import style from "./LabelSearch.module.scss";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import LabelButton from "../LabelButton";
import { Tag } from "@/Domain/tag/Tag";
import useBlogTags from "@/Application/blog/useBlogTags";
import useBlog from "@/Application/blog/useBlog";
import useTranslate from "@/Application/translate/useTranslate";

const LabelSearch = ({ tags }: { tags: Tag[] }) => {
  const { setTags } = useBlogTags();
  const { setBlogRequestType } = useBlog();
  const { t } = useTranslate();
  return (
    <div style={{ padding: "1.5em" }}>
      <Typography.Paragraph style={{ marginBottom: "2em" }} className={Utils.text_bold_lg}>
        Búsqueda por etiqueta
      </Typography.Paragraph>
      <div className={style.divButtons}>
        {tags.map((tag) => (
          <LabelButton
            key={tag.id}
            data={{
              id: tag.id.toString(),
              text: t(tag.value),
              callback: () => {
                setBlogRequestType("tags");
                setTags(tag.id);
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LabelSearch;
