import Style from "./globals.module.scss";
import Utils from "./utils/utils.module.scss";
import type { ThemeConfig } from "antd";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import token, { components } from "./Tokens";

import { Quicksand } from "next/font/google";
import localFont from "next/font/local";

const sawya = localFont({ src: "./resources/SAWYA.woff2", variable: "--sawya", weight: "700" });

const quicksand = Quicksand({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--quicksand",
});

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const config: ThemeConfig = {
    token,
    components,
  };

  return (
    <html
      lang="es"
      className={`${sawya.variable} ${quicksand.variable} ${Style.root} ${Utils.root}`}
    >
      <AntdRegistry>
        <ConfigProvider
          theme={config}
          typography={{
            className: Style.typography,
          }}
          checkbox={{
            className: Style.checkbox,
          }}
        >
          {children}
        </ConfigProvider>
      </AntdRegistry>
    </html>
  );
}
