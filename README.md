# landing-page-exoplanet
## running the code locally
requires a run of tsc before working  
**REQUIRES TYPESCRIPT**
## how to
adding and removing groups:  
- just add and remove from groupData
- inputs must match this interface
```typescript
interface GroupData{
    groups: {
        folder: string, // Folder location in relation to TS file
        name: string, // Display name for the Group
        text: string // little fun fact or any text below the name
    }[]
}
```
## own content for the fields
each field has 2 options u can add content to:
- group<groupid>-name-display for a **h3**-tag title
- group<groupid>-content-display which is a **p**-tag intended for short information, like participants, topic, etc.
those have to be changed within the **TYPESCRIPT** file
own content can be created in this way:  
```typescript
const group1Title: HTMLElement = document.getElementById("group1-name-display");
if (group1Title) group1Title.innerHTML = "Super Gruppe";
```