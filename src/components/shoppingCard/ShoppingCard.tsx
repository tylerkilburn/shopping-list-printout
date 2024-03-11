import { IShoppingItem } from "@types"
import styles from "./shoppingCard.module.scss"
import { ShoppingItem } from "./shoppingItem/ShoppingItem"

export interface IShoppingCardProps {
  shoppingItems: IShoppingItem[]
}

export const ShoppingCard = ({ shoppingItems }: IShoppingCardProps) => {
  return (
    <div class={styles.root}>
      {shoppingItems.map((shoppingItem) => (
        <ShoppingItem shoppingItem={shoppingItem} />
      ))}
    </div>
  )
}
