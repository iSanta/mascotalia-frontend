import Image from "next/image";
import Style from "./Entries.module.scss";
import { Col, Row, Space, Typography, Card } from "@/Presentation/design-system";
import Utils from "@/Presentation/design-system/utils/utils.module.scss";
import useDate from "@/Application/date/useDate";
import Link from "next/link";

type BaseEntry = {
  id: string;
  image: string;
  title: string;
  createdAt: string;
};

type EntryProps<T extends BaseEntry> = {
  entries: T[];
  title: string;
  url: (data: T) => {};
};

const Entries = <T extends BaseEntry>({ entries, title, url }: EntryProps<T>) => {
  const { shortDateFormat } = useDate();

  return (
    <Card>
      <Typography.Paragraph style={{ padding: "1.5em" }} className={Utils.text_bold_lg}>
        {title}
      </Typography.Paragraph>

      {entries.map((entry) => {
        return (
          <Link key={entry.id} href={url(entry)}>
            <div style={{ paddingLeft: "1.5em", paddingRight: "1.5em", paddingBottom: "1.5em" }}>
              <Row align={"middle"} gutter={16}>
                <Col xl={10}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${entry.image}`}
                    width={100}
                    height={150}
                    alt={entry.title}
                    className={Style.image}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Col>

                <Col xl={14}>
                  <Space direction="vertical" size={"middle"}>
                    <Typography.Paragraph className={Utils.text_neutral}>
                      {shortDateFormat(entry.createdAt)}
                    </Typography.Paragraph>
                    <Typography.Paragraph>{entry.title}</Typography.Paragraph>
                  </Space>
                </Col>
              </Row>
            </div>
          </Link>
        );
      })}
    </Card>
  );
};

export default Entries;
