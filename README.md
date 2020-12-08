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

Covert with SFDX; This creates a folder called `deploy`

```bash
sfdx force:source:convert -r force-app -d deploy
```

Now you can deploy from the resulting `deploy` directory

```bash
sfdx force:mdapi:deploy -d deploy -w -1  --verbose 
```

📌  Above deploys to the default org set

- Add `-u user@domain.com` or `-u alias` to deploy else where
- To run tests add `-l RunSpecifiedTests -r ApexTestName`

Results should more or less mirror below

```bash
Deployment finished in 121000ms

=== Result
Status:  Succeeded
jobid:  0Af3b000003ZSudCAG
Completed:  2019-05-17T14:39:25.000Z
Component errors:  0
Components deployed:  5
Components total:  5
Tests errors:  0
Tests completed:  1
Tests total:  1
Check only: false

=== Test Success [1]
NAME         METHOD
───────────  ──────
RummageTest  search

=== Apex Code Coverage
NAME     % COVERED  UNCOVERED LINES
───────  ─────────  ───────────────
Rummage  92%        19

Total Test Time:  158.0

=== Components Deployed [5]
TYPE                      FILE                            NAME           ID
────────────────────────  ──────────────────────────────  ─────────────  ──────────────────
                          deploy/package.xml              package.xml
ApexClass                 deploy/classes/Rummage.cls      Rummage        01p3b000000JeCWAA0
ApexClass                 deploy/classes/RummageTest.cls  RummageTest    01p3b000000JeCXAA0
LightningComponentBundle  deploy/lwc/reactiveTable        reactiveTable  0Rb3b0000004C9NCAU
LightningComponentBundle  deploy/lwc/rummageBar           rummageBar     0Rb3b0000004C9OCAU
LightningComponentBundle  deploy/lwc/rummageView          rummageView    0Rb3b0000004C9PCAU
```

---

coded while petting a 🐶 by [Jamie Smith](https://jsmith.dev)