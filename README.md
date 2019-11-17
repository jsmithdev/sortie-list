# sortie-list

## LWC to sort a list by drag and drop

### Consuming

- Use `list` attribute to set array of Strings
- Use `onchange` attribute to listen for changes

```html
<c-sortie-list
    list={array}
    onchange={handleChange}
></c-sortie-list>
```

Example of what above could look like to set Array and get sorted Array back 

```js
import { LightningElement } from 'lwc';

export default class Demo extends LightningElement {

    array = ['Border Collie', 'Dragon', 'Quokka', 'Kangaroo', 'dan cortese']

    handleChange(event){

        event.detail // is Array of given list in new order set by user
    }
}
```

---

coded while petting a 🐶 by [Jamie Smith](https://jsmith.dev)