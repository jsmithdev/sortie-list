# sortie-list

LWC to sort a list by drag and drop

<img src="https://i.imgur.com/7yBr3Lv.gif" width="300px"/>

## Properties

`list`

- Array of strings used to create the list

`onchange`

- listener for changes
- change event fires when the user orders a list

`color`

- text color for draggable items
- defaults to black
- accepts RGB, HEX or Color Names; "#000" == "black"

`background-color`

- background color for draggable items
- defaults to white
- accepts RGB, HEX or Color Names; "#FFF" == "white"

## Examples

```html
<c-sortie-list
    list={array}
    color="#FFF"
    background-color="blue"
    onchange={handleChange}
></c-sortie-list>
```

Example of what above could look like to set Array and get sorted Array back

```js
import { LightningElement } from 'lwc';

export default class Demo extends LightningElement {

    array = ['Border Collie', 'Dragon', 'Quokka', 'Kangaroo', 'dan cortese']

    handleChange(event){

        event.detail // is Array of list ordered by user
    }
}
```

## Deploy

Click to deploy can be done at [https://component.land?share=jsmithdev%2Fsortie-list](https://component.land?share=jsmithdev%2Fsortie-list)

SFDX deployment instructions can be found at [https://github.com/jsmithdev/sfdx-deploy-instructions](https://github.com/jsmithdev/sfdx-deploy-instructions)

---

coded while petting a 🐶 by [Jamie Smith](https://jsmith.dev)
