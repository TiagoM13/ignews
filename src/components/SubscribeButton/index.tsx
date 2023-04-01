import React from "react";

import styles from "./styles.module.scss";

// interface SubscribeButtonProps {
//   priceId: string;
// }

export function SubscribeButton() {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
