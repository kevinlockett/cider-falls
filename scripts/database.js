/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    destinations: [{
        id: 1,
        destination: "Cider Falls Lodge",
        section: "Northwest",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Morbi tincidunt ornare massa eget egestas purus viverra. Ut tellus elementum sagittis vitae et leo duis ut. Sed turpis tincidunt id aliquet risus feugiat in.",
        image: "lodge.png",
        image_alt: "An outdoor image of Cider Falls Lodge"
    }, {
        id: 2,
        destination: "Lost Wolf Hiking Trails",
        section: "North",
        description: "Ac placerat vestibulum lectus mauris ultrices eros in. In nibh mauris cursus mattis. Nunc faucibus a pellentesque sit amet porttitor eget. Molestie at elementum eu facilisis sed. Volutpat maecenas volutpat blandit aliquam etiam. Turpis in eu mi bibendum neque egestas congue quisque. Morbi leo urna molestie at. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.",
        image: "trail.png",
        image_alt: "One of the six hiking trails in the North Section of the park"
    }, {
        id: 3,
        destination: "Lake Chamfort",
        section: "Northeast",
        description: "Ornare lectus sit amet est. At ultrices mi tempus imperdiet. Aliquam sem fringilla ut morbi tincidunt augue. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Blandit aliquam etiam erat velit scelerisque in. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas.",
        image: "lake.png",
        image_alt: "Beautiful Lake Chamfort in the shadow of neighboring Pinecrest Mountain Ski Resort"
    }, {
        id: 4,
        destination: "Gander River",
        section: "Southwest",
        description: "At elementum eu facilisis sed odio morbi quis commodo. Turpis in eu mi bibendum. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam id diam maecenas ultricies mi eget. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Ac auctor augue mauris augue. Urna molestie at elementum eu facilisis sed odio morbi. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est.",
        image: "fishing.png",
        image_alt: "A fly fisherman casting in the Gander River"
    }, {
        id: 5,
        destination: "Loose Moose Campground",
        section: "South",
        description: "Tortor aliquam nulla facilisi cras fermentum odio. Tempus egestas sed sed risus pretium. Felis imperdiet proin fermentum leo vel orci. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Dui ut ornare lectus sit. Urna nunc id cursus metus aliquam eleifend. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Urna cursus eget nunc scelerisque viverra mauris in. Sagittis vitae et leo duis ut diam quam nulla porttitor. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin.",
        image: "camping.png",
        image_alt: "A tent lit by bonfire on a crisp fall evening."
    }, {
        id: 6,
        destination: "Pine Bluff Trails",
        section: "Southeast",
        description: "Amet nulla facilisi morbi tempus iaculis urna id volutpat. Magna sit amet purus gravida quis blandit turpis cursus. Facilisis volutpat est velit egestas dui. Eu turpis egestas pretium aenean pharetra magna ac placerat. Posuere urna nec tincidunt praesent semper. Id neque aliquam vestibulum morbi blandit. Morbi quis commodo odio aenean sed adipiscing. Et netus et malesuada fames ac. Mattis ullamcorper velit sed ullamcorper morbi tincidunt.",
        image: "hiking.png",
        image_alt: "Two hikers cresting one of the 7 hiking trails in this section of the park."
    }],
    services: [{
        id: 1,
        service: "Administration",
        icon: "fa-duotone fa-user-tie"
    }, {
        id: 2,
        service: "Boating",
        icon: "fa-duotone fa-ship"
    }, {
        id: 3,
        service: "Camping",
        icon: "fa-duotone fa-tent"
    }, {
        id: 4,
        service: "Children's Play Area",
        icon: "fa-duotone fa-bench-tree"
    }, {
        id: 5,
        service: "Downhill Skiing",
        icon: "fa-duotone fa-person-skiing"
    }, {
        id: 6,
        service: "Fishing",
        icon: "fa-duotone fa-fishing-rod"
    }, {
        id: 7,
        service: "Food Cart Area",
        icon: "fa-duotone fa-burger-soda"
    }, {
        id: 8,
        service: "Hiking",
        icon: "fa-duotone fa-person-hiking"
    }, {
        id: 9,
        service: "Indoor Dining",
        icon: "fa-duotone fa-plate-utensils"
    }, {
        id: 10,
        service: "Information",
        icon: "fa-duotone fa-circle-info"
    }, {
        id: 11,
        service: "Lodging",
        icon: "fa-duotone fa-bed-front"
    }, {
        id: 12,
        service: "Nordic Skiing",
        icon: "fa-duotone fa-person-skiing-nordic"
    }, {
        id: 13,
        service: "Parking",
        icon: "fa-duotone fa-circle-parking"
    }, {
        id: 14,
        service: "Picnic Area",
        icon: "fa-duotone fa-table-picnic"
    }, {
        id: 15,
        service: "Rock Climbing",
        icon: "fa-duotone fa-mountain"
    }, {
        id: 16,
        service: "Sailing",
        icon: "fa-duotone fa-sailboat"
    }],
    areaServices: [
        //Cider Falls Lodge
        {
        id: 1,
        destinationId: 1,
        serviceId: 9
    }, {
        id: 2,
        destinationId: 1,
        serviceId: 10
    }, {
        id: 3,
        destinationId: 1,
        serviceId: 11
    }, {
        id: 4,
        destinationId: 1,
        serviceId: 13
    }, {
        id: 5,
        destinationId: 1,
        serviceId: 14
    },
        //Lost Wolf Hiking Trails
        {
        id: 6,
        destinationId: 2,
        serviceId: 8
    }, {
        id: 7,
        destinationId: 2,
        serviceId: 12
    }, {
        id: 8,
        destinationId: 2,
        serviceId: 14
    }, {
        id: 9,
        destinationId: 2,
        serviceId: 15
    },
        //Lake Chamfort
        {
        id: 10,
        destinationId: 3,
        serviceId: 2
    }, {
        id: 11,
        destinationId: 3,
        serviceId: 6
    }, {
        id: 12,
        destinationId: 3,
        serviceId: 16
    },
        //Gander River"
        {
        id: 13,
        destinationId: 4,
        serviceId: 6
    }, {
        id: 14,
        destinationId: 4,
        serviceId: 8
    }, {
        id: 15,
        destinationId: 4,
        serviceId: 12
    },
        //Loose Moose Campground
        {
        id: 16,
        destinationId: 5,
        serviceId: 1
    }, {
        id: 17,
        destinationId: 5,
        serviceId: 3
    }, {
        id: 18,
        destinationId: 5,
        serviceId: 4
    }, {
        id: 19,
        destinationId: 5,
        serviceId: 11
    }, {
        id: 20,
        destinationId: 5,
        serviceId: 13
    },
        //Pine Bluff Trails
        {
        id: 21,
        destinationId: 6,
        serviceId: 5
    }, {
        id: 22,
        destinationId: 6,
        serviceId: 7
    }, {
        id: 23,
        destinationId: 6,
        serviceId: 8
    }, {
        id: 24,
        destinationId: 6,
        serviceId: 12
    }, {
        id: 25,
        destinationId: 6,
        serviceId: 14
    }],
    guests: [{
        id: 1,
        firstName: "Steven",
        lastName: "Anderson",
        destinationId: 1
    }, {
        id: 2,
        firstName: "James",
        lastName: "Brown",
        destinationId: 3
    }, {
        id: 3,
        firstName: "Cascious",
        lastName: "Clay",
        destinationId: 5
    }, {
        id: 4,
        firstName: "Mary",
        lastName: "Dornbush",
        destinationId: 2
    }, {
        id: 5,
        firstName: "John",
        lastName: "Eisenman",
        destinationId: 4
    }, {
        id: 6,
        firstName: "Aretha",
        lastName: "Franklin",
        destinationId: 6
    }, {
        id: 7,
        firstName: "Earl",
        lastName: "Grey",
        destinationId: 1
    }, {
        id: 8,
        firstName: "Sherry",
        lastName: "Homes",
        destinationId: 2
    }, {
        id: 9,
        firstName: "Charles",
        lastName: "Ironside",
        destinationId: 3
    }, {
        id: 10,
        firstName: "Merle",
        lastName: "Jones",
        destinationId: 2
    }, {
        id: 11,
        firstName: "James",
        lastName: "Keith",
        destinationId: 4
    }, {
        id: 12,
        firstName: "Elisha Samuel",
        lastName: "Lockett",
        destinationId: 6
    }, {
        id: 13,
        firstName: "James",
        lastName: "Montgomery",
        destinationId: 2
    }, {
        id: 14,
        firstName: "Becky",
        lastName: "Nelson",
        destinationId: 3
    }, {
        id: 15,
        firstName: "Dean",
        lastName: "Opp",
        destinationId: 4
    }, {
        id: 16,
        firstName: "Melony",
        lastName: "Popejoy",
        destinationId: 6
    }, {
        id: 17,
        firstName: "Sam",
        lastName: "Quenten",
        destinationId: 3
    }, {
        id: 18,
        firstName: "Arthur",
        lastName: "Romero",
        destinationId: 4
    }, {
        id: 19,
        firstName: "Levenis",
        lastName: "Smith",
        destinationId: 5
    }, {
        id: 20,
        firstName: "B. J.",
        lastName: "Turnkey",
        destinationId: 4
    }, {
        id: 21,
        firstName: "Mac",
        lastName: "Ulvaney",
        destinationId: 5
    }, {
        id: 22,
        firstName: "Franklin",
        lastName: "Victor",
        destinationId: 6
    }, {
        id: 23,
        firstName: "Wesley",
        lastName: "Wilmont",
        destinationId: 1
    }, {
        id: 24,
        firstName: "Kenneth",
        lastName: "Xavier",
        destinationId: 2
    }, {
        id: 25,
        firstName: "Steven",
        lastName: "Young",
        destinationId: 3
    }, {
        id: 26,
        firstName: "Ephram",
        lastName: "Zimblest",
        destinationId: 5
    }]
}

export const getDestinations = () => {
    return database.destinations.map(destination => ({...destination}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getAreaServices = () => {
    return database.areaServices.map(areaService => ({...areaService}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}