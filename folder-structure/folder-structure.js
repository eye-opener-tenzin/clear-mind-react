const folders = [
    {
        name: 'Work',
        contents: [
        {
            name: 'Code',
            contents: [],
            dateCreated: '11/22/2021',
            id: 387,
            level: 2
        },
        {
            name: 'Meetings',
            contents: [],
            dateCreated: '11/22/2021',
            id: 889,
            level: 2
        },
        {
            name: 'Notes',
            contents: [],
            dateCreated: '11/22/2021',
            id: 3,
            level: 2
        }
        ], 
        dateCreated: '11/22/2021',
        id: 1,
        level: 1
    },
    {
        name: 'Personal',
        contents: [
        {
            name: 'My Music',
            contents: [],
            dateCreated: '11/22/2021',
            id: 4,
            level: 2
        },
        {
            name: 'My Youtube Videos',
            contents: [],
            dateCreated: '11/22/2021',
            id: 9,
            level: 2
        },
        {
            name: 'Random Links',
            contents: [],
            dateCreated: '11/22/2021',
            id: 7,
            level: 2
        }
    ],
        dateCreated: '11/22/2021',
        id: 13,
        level: 1
    },
    {
        name: 'Purchases',
        contents: [
        {
            name: 'Amazon',
            contents: [],
            dateCreated: '11/22/2021',
            id: 90,
            level: 2
        },
        {
            name: 'Zappos',
            contents: [],
            dateCreated: '11/22/2021',
            id: 91,
            level: 2
        },
        {
            name: 'Petco',
            contents: [],
            dateCreated: '11/22/2021',
            id: 79,
            level: 2
        }
    ],
        dateCreated: '11/22/2021',
        id: 12,
        level: 1
    }
];

const folderStructure = () => {
    for (let i = 0; i <= folders.length; i++) {
        console.log(`- ${folders[i].name}`) 
        folders[i].contents.map(name => {
             console.log(`  + ${name.name}`)
         })
      
    }
}

folderStructure()

