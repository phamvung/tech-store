import React from "react";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

function SectionContainer({
  className,
  title,
  children,
  seeAll = true,
  option,
  path,
}) {
  let classContainer = "mt-20 ";

  if (className) {
    classContainer += className;
  }

  return (
    <section className={classContainer}>
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold mb-3">{title}</h1>
        {option}
      </div>

      {children}

      {seeAll && (
        <div className="mt-10 flex justify-center">
          <Button mode="red">
            <Link to={path}>Xem tất cả &#10095;</Link>
          </Button>
        </div>
      )}
    </section>
  );
}

export default SectionContainer;
