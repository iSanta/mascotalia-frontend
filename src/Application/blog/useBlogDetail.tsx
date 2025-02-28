import BlogDetailText from "@/Presentation/components/Blog/BlogDetailText";
import BlogQuotes from "@/Presentation/components/Blog/BlogQuotes";
import { JSX } from "react";

import React from "react";

const useBlogDetail = () => {
  const showEntryWithFluidImages = (
    entry: string,
    images: string[],
    quote?: string
  ): JSX.Element => {
    let wordCount = 0;
    const elements: JSX.Element[] = [];
    let imageCount: number = 0;
    let textChunk: string = "";

    const words = entry.split(" ");

    words.forEach((word, index) => {
      wordCount++;
      textChunk += ` ${word}`;

      if (wordCount === 200 && imageCount < images.length) {
        elements.push(
          <React.Fragment key={`${index}-${imageCount}`}>
            <BlogDetailText
              text={textChunk}
              float={imageCount % 2 === 0 ? "right" : "left"}
              imageUrl={images[imageCount]}
            />
          </React.Fragment>
        );

        wordCount = 0;
        textChunk = "";
        imageCount++;
      }
    });

    if (textChunk.trim().length > 0) {
      elements.push(<div key={`remaining-text`}>{textChunk}</div>);
    }

    quote && elements.push(<BlogQuotes key={"quote"} text={quote} />);

    return <>{elements}</>;
  };

  return {
    showEntryWithFluidImages,
  };
};

export default useBlogDetail;
