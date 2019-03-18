import * as React from "react";
import * as styles from "./style.css";
import Card from "../../parts/Card";
import Button from "../../parts/Button";

export interface ILikeCard {
  title: string;
  buttonContent?: string;
  className?: string;
}

const LikeCard: React.SFC<ILikeCard> = ({
  title,
  buttonContent,
  className,
  children
}) => (
  <Card className={className}>
    <h3 className={styles.h3}>{title}</h3>
    {children}
    <div className={styles.buttonZone}>
      {buttonContent && <Button>{buttonContent}</Button>}
    </div>
  </Card>
);

export default LikeCard;
