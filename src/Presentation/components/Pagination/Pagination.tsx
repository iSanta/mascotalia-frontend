import React, { useState } from "react";
import Style from "./Pagination.module.scss";
import { Flex, Button, Typography } from "@/Presentation/design-system";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Pagination = ({
  onChange,
  maxPages,
  initialCurrentPage,
}: {
  onChange: (n: number) => void;
  maxPages: number;
  initialCurrentPage?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(initialCurrentPage || 1);

  const pagesPerGroup = 6;
  const currentGroup = Math.ceil(currentPage / pagesPerGroup);
  const startPage = (currentGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, maxPages);
  const elements = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  const pagesPerGroupM = 2;
  const currentGroupM = Math.ceil(currentPage / pagesPerGroupM);
  const startPageM = (currentGroupM - 1) * pagesPerGroupM + 1;
  const endPageM = Math.min(startPageM + pagesPerGroupM - 1, maxPages);
  const elementsM = Array.from({ length: endPageM - startPageM + 1 }, (_, index) => startPage + index);

  const PaginationArrow = (direction: "left" | "right") => {
    let newPage: number = currentPage;
    if (direction === "left" && currentPage > 1) {
      newPage = currentPage - 1;
    }
    if (direction === "right" && currentPage < maxPages) {
      newPage = currentPage + 1;
    }

    if (newPage !== currentPage) {
      setCurrentPage(newPage);
      onChange(newPage);
    }
  };

  return (
    <Flex gap={4}>
      <Button size="middle" type="text" onClick={() => PaginationArrow("left")}>
        <Flex align="center" justify="center">
          <FaArrowLeftLong />
        </Flex>
      </Button>
      <Flex className={Style.paginationDesktop}>
        {elements.map((index) => (
          <Button
            size="middle"
            color="default"
            variant={index == currentPage ? "filled" : "text"}
            key={index}
            onClick={() => {
              setCurrentPage(index);
              onChange(index);              
            }}
          >
            <Typography.Paragraph>{index}</Typography.Paragraph>
          </Button>
        ))}
      </Flex>
      <Flex className={Style.paginationMovile}>
        {elementsM.map((index) => (
          <Button
            size="middle"
            color="default"
            variant="dashed"
            key={index}
            onClick={() => {
              setCurrentPage(index);
              onChange(index);              
            }}
            style={{ borderColor: index == currentPage ? "var(--color-primary)" : "" }}
          >
            <Typography.Paragraph>{index}</Typography.Paragraph>
            
          </Button>
        ))}
      </Flex>
      <Button size="middle" type="text" onClick={() => PaginationArrow("right")}>
        <Flex align="center" justify="center">
          <FaArrowRightLong />
        </Flex>
      </Button>
    </Flex>
  );
};

export default Pagination;
