import React from "react";
import { convertToHTML } from "draft-convert";
import { BLOCK_TYPE, STYLE_TYPE } from "./types";

export default convertToHTML({
  blockToHTML: ({ type }) => {
    if (type === BLOCK_TYPE.PARAGRAPH) {
      return <p />;
    }

    if (type === BLOCK_TYPE.HEADER_ONE) {
      return <h1 />;
    }
  },
  styleToHTML: (style) => {
    if (style.includes(STYLE_TYPE.BACKGROUND_COLOR)) {
      return (
        <span
          style={{
            backgroundColor: style.replace(STYLE_TYPE.BACKGROUND_COLOR, ""),
          }}
        />
      );
    }

    if (style.includes(STYLE_TYPE.COLOR)) {
      return <span style={{ color: style.replace(STYLE_TYPE.COLOR, "") }} />;
    }

    if (style.includes(STYLE_TYPE.FONTS_SIZE)) {
      return (
        <span
          style={{
            fontSize: parseInt(style.replace(STYLE_TYPE.FONTS_SIZE, ""), 10),
          }}
        />
      );
    }

    if (style.includes(STYLE_TYPE.FONT_FAMILY)) {
      return (
        <span
          style={{ fontFamily: style.replace(STYLE_TYPE.FONT_FAMILY, "") }}
        />
      );
    }
  },
  entityToHTML: ({ type, data }, originalText) => {
    if (type === BLOCK_TYPE.LINK) {
      return (
        <a target={data.targetOption} href={data.url}>
          {originalText}
        </a>
      );
    }

    return originalText;
  },
});
