export const feeddata = [
    {
        date: new Date('12 April 2019'),
        events: [
            {
                id: 1,
                date: '04/12/19',
                time: '2:00 PM',
                creator: 'Nitzan Nashi',
                title: 'Lunch in The Mensa!',
                RVSP: {
                    capacity: 10,
                    attending: 8,
                    available: 2,
                    percentage: 0.8, // this.RVSP.attending / this.RVSP.capacity,
                },
                location: 'Mensa TU Berlin',
                avatar: 'https://qul.imgix.net/f8d3d40b-c975-4d7f-a09c-3d0669c14350/369779_sld.jpg', // null for default
                going: true,
                members: [
                    2,
                    3,
                    4,
                ],
            },
            {
                id: 2,
                date: '04/12/19',
                time: '5:00 PM',
                creator: 'Nitzan Nashi',
                title: 'dinner in The Mensa!',
                RVSP: {
                    capacity: 10,
                    attending: 6,
                    available: 4,
                    percentage: 0.6, // this.RVSP.attending / this.RVSP.capacity,
                },
                location: 'Mensa TU Berlin',
                avatar: null, // null for default
                going: false,
                members: [
                    2,
                    3,
                    4,
                ],

            },
        ],
    },
    {
        date: new Date('06 June 2019'),
        events: [
            {
                id: 3,
                date: '06/06/19',
                time: '6:00 PM',
                creator: 'Lama Lama',
                title: 'Dinner in The Mensa!',
                RVSP: {
                    capacity: 50,
                    attending: 30,
                    available: 20,
                    percentage: 0.6, // this.RVSP.attending / this.RVSP.capacity,
                },
                location: 'Mensa TU Berlin',
                avatar: null, // null for default
                going: true,
                members: [
                    2,
                    3,
                    4,
                ],
            },
        ],
    },
    {
        date: new Date('20 August 2019'),
        events: [
            {
                id: 4,
                date: '08/20/19',
                time: '8:00 AM',
                creator: 'Someone Else',
                title: 'Breakfast in My Place!',
                RVSP: {
                    capacity: 5,
                    attending: 1,
                    available: 4,
                    percentage: 0.2, // this.RVSP.attending / this.RVSP.capacity,
                },
                location: 'Fancy Restaurant',
                avatar: 'https://twolovesstudio.com/wp-content/uploads/2017/05/99-Best-Food-Photography-Tips-5-1.jpg', // null for default
                going: false,
                members: [
                    2,
                    3,
                    4,
                ],
            },
        ],
    },
];

export const events =[
    {
        id: 1,
        date: '04/12/19',
        time: '2:00 PM',
        creator: 'Nitzan Nashi',
        title: 'Lunch in The Mensa!',
        RVSP: {
            capacity: 10,
            attending: 8,
            available: 2,
            percentage: 0.8, // this.RVSP.attending / this.RVSP.capacity,
        },
        location: 'Mensa TU Berlin',
        avatar: 'https://qul.imgix.net/f8d3d40b-c975-4d7f-a09c-3d0669c14350/369779_sld.jpg', // null for default
        going: true,
        about: 'this is just some random text about the event' +
            'so come with us' +
            'and have some fun',
        members: [
            2,
            3,
            4,
        ],
    },
    {
        id: 2,
        date: '04/12/19',
        time: '5:00 PM',
        creator: 'Nitzan Nashi',
        title: 'dinner in The Mensa!',
        RVSP: {
            capacity: 10,
            attending: 6,
            available: 4,
            percentage: 0.6, // this.RVSP.attending / this.RVSP.capacity,
        },
        location: 'Mensa TU Berlin',
        avatar: null, // null for default
        going: false,
        members: [
            2,
            3,
            4,
        ],
    },
    {
        id: 3,
        date: '06/06/19',
        time: '6:00 PM',
        creator: 'Lama Lama',
        title: 'Dinner in The Mensa!',
        RVSP: {
            capacity: 50,
            attending: 30,
            available: 20,
            percentage: 0.6, // this.RVSP.attending / this.RVSP.capacity,
        },
        location: 'Mensa TU Berlin',
        avatar: null, // null for default
        going: true,
        members: [
            2,
            3,
            4,
        ],
    },
    {
        id: 4,
        date: '08/20/19',
        time: '8:00 AM',
        creator: 'Someone Else',
        title: 'Breakfast in My Place!',
        RVSP: {
            capacity: 5,
            attending: 1,
            available: 4,
            percentage: 0.2, // this.RVSP.attending / this.RVSP.capacity,
        },
        location: 'Fancy Restaurant',
        avatar: 'https://twolovesstudio.com/wp-content/uploads/2017/05/99-Best-Food-Photography-Tips-5-1.jpg', // null for default
        going: false,
        members: [
            2,
            3,
            4,
        ],
    },
];
