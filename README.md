# Landing Page Mission Exoplanet
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

# Gallery
Gets loaded as an iframe, just as all other subpages  
Important here: Generation once again within the Code, however this time in JS  
Whilst being in JS the entry still matches this TS interface
````typescript
interface Image{
    images: {
        name: string, // Filename with extension
        text: string // text being displayed below the image
    }
}
````

