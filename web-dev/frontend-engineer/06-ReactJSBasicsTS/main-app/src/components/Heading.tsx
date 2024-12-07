import { ReactNode } from "react";

const Heading = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <>
      <h1
        style={{
          marginBottom: "10px",
        }}
      >
        {children}
        {title}
      </h1>
    </>
  );
};

export default Heading;
