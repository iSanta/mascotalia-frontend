import { Fragment } from "react";
import Footer from "@/Presentation/components/Footer";
import Header from "@/Presentation/components/Header";

type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  return (
    <Fragment>
        <Header />
        {children}
        <Footer />
    </Fragment>
  );
}
