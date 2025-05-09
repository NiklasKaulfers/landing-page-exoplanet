# landing-page-exoplanet
## how to
adding and removing groups:  
- create a folder named "group<n>" where n has to be unique and keeps getting incremented
- when removing a folder it can be kept empty, however add the index to EMPTY_GROUPS in index.ts
```typescript
// we have 5 folders, however folder 3 and 4 are empty
// overall amount of folders
const GROUP_AMOUNT: number = 5;
// excluded folders to avoid 404s in the iframes and misslinks
const EMPTY_GROUPS: number[] = [3,4];
```
## own content for the fields
each field has 2 options u can add content to:
- group<groupid>-name-display for an **h3**-tag title
- group<groupid>-content-display which is a **p**-tag intended for short information, like participants, topic, etc
those have to be changed within the **TYPESCRIPT** file
own content can be created in this way:  
```typescript
const group1Title: HTMLElement = document.getElementById("group1-name-display");
if (group1Title) group1Title.innerHTML = "Super Gruppe";
```