import { IShoppingItem } from "@types"
import styles from "./shoppingItem.module.scss"

export interface IShoppingItemProps {
  shoppingItem: IShoppingItem
}
export const ShoppingItem = ({ shoppingItem }: IShoppingItemProps) => {
  return (
    <div class={styles.root}>
      <div>{shoppingItem.name}</div>
      <div class={styles.writeIn} />
    </div>
  )
}
