import { FC } from "react";

const TitleText: FC<{ text: string; styles?: string }> = ({ text, styles }) => {
  return (
    <h1
      className={`text-6xl sm:text-7xl md:text-6xl xl:text-8xl font-medium ${styles}`}
    >
      {text}
    </h1>
  );
};

export default TitleText;
