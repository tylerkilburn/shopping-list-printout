import { ShoppingCard } from "./components/shoppingCard/ShoppingCard"
import styles from "./App.module.scss"

import groceries from "./data/groceries.json"
import { JSXElement } from "solid-js"
import { IShoppingItem } from "@types"

const ITEM_LIMIT = 44

const App = () => {
  return <div class={styles.root}>{renderShoppingCards(6)}</div>
}

const renderShoppingCards = (num: number) => {
  const jsx: JSXElement = []
  for (let i = 0; i < num; i++) {
    jsx.push(<ShoppingCard shoppingItems={truncateShoppingItems(groceries)} />)
  }
  return jsx
}

const truncateShoppingItems = (shoppingItems: IShoppingItem[]) => {
  const truncatedShoppingItems = shoppingItems.slice(0, ITEM_LIMIT)
  for (let i = truncatedShoppingItems.length; i < ITEM_LIMIT; i++) {
    truncatedShoppingItems.push({ category: "", name: "" })
  }
  return truncatedShoppingItems
}

export default App
