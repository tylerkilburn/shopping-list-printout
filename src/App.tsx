import { ShoppingCard } from "./components/shoppingCard/ShoppingCard"
import styles from "./App.module.scss"

import groceries from "./data/groceries.json"
import { JSXElement } from "solid-js"
import { IShoppingItem } from "@types"

const BLANK_TEXT = "__________"
const ITEM_LIMIT = 44

//@ts-ignore

const App = () => {
  const data = matchDataToListName(import.meta.env.VITE_LIST_NAME)
  return <div class={styles.root}>{renderShoppingCards(6, data)}</div>
}

const renderShoppingCards = (num: number, data: IShoppingItem[]) => {
  const jsx: JSXElement = []
  for (let i = 0; i < num; i++) {
    jsx.push(<ShoppingCard shoppingItems={truncateShoppingItems(data)} />)
  }
  return jsx
}

const truncateShoppingItems = (shoppingItems: IShoppingItem[]) => {
  const truncatedShoppingItems = shoppingItems.slice(0, ITEM_LIMIT)
  for (let i = truncatedShoppingItems.length; i < ITEM_LIMIT; i++) {
    truncatedShoppingItems.push({ category: "", name: BLANK_TEXT })
  }
  return truncatedShoppingItems
}

const matchDataToListName = (listName: string) => {
  switch (listName) {
    case "grocery":
    case "groceries":
      return groceries
  }
  return []
}

export default App
