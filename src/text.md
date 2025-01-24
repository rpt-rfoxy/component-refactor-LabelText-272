Hello @kurtdoherty 

As the sugestion, i think Dinamic LabelText will match the requirment, in this part the LabelText will have the parameter its called `legend`, and the value will 'label' | 'span' | 'text' | 'dt' | 'p' . and the HTML element will rendered  the element as the legend.

i'm not sure if it's match with the  [suggestion](https://www.figma.com/design/XJ6qcAV8gHscsUodqJMNEF?node-id=3592-3638&m=dev#1085067444)

---
# Table Atoms Solution Design

## new parameters added
The Table will have the following main prop interface

| Prop | Value | Default | Usage |
| --- | --- | --- |--- |
| legend?: enum  | 'label' , 'span' , 'text' , 'dt' , 'p' | label | its used for defined tyhe DOM element, need more discussion about the enum value |

---


### **Code Concept**
to see the detail implementation,  you can check it  here ([POC](https://codesandbox.io/p/github/rpt-rfoxy/component-refactor-LabelText-272/draft/quirky-voice)) please let me know if the link didnt work


```