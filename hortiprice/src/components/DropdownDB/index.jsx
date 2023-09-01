import './DropdownDB.css'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConnection';


const DropdownDB = (props) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const fetchItems = async () => {
          const collectionRef = collection(db, props.collectionName);
          const snapshot = await getDocs(collectionRef);
          const itemList = snapshot.docs.map((doc) => doc.data()[props.fieldName]);
          setItems(itemList);
        };
    
        fetchItems();
      }, [props.collectionName, props.fieldName]);

    

      return (
        <div className='dropdown-db'>
          <label>{props.label}</label>
          <select value={props.value} onChange={(e) => props.setter(e.target.value)}>
            <option disabled value="">
              {props.title}
            </option>
              {items.map((item) => (
                <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      );
    
}

export default DropdownDB