# sortie-list

## LWC to sort a list by drag and drop

This is really made to be "consumed" by a larger / parent component

- Consumers can use ```list``` to set array of Strings
- Consumers can use ```onchange``` to listen for changes

Consumer HTML
```html
<c-sortie-list
    list={array}
    onchange={handleChange}
></c-sortie-list>
```

Consumer JS
```js
import { LightningElement } from 'lwc';

export default class Demo extends LightningElement {

    array = ['Border Collie', 'Dragon', 'Quokka', 'Kangaroo', 'dan cortese']

    handleChange(event){

        event.detail // Consumer has array in new order set by user
    }
}
```

---

coded while petting a 🐶 by [Jamie Smith](https://jsmith.dev)