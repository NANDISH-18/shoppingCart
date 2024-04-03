import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from '../data/itemData'

function Items() {
  return (
    <>
      
        <div className={styles.wrapper}>
          {data.map((card) => (
            <ItemCard name={card.name} price={card.price} key={card.id} id={card.id}/>
          ))}
        </div>
      
    </>
    
  );
}

export default Items;
