

const mockProducts = [
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    },
    {
        _id: (Math.floor(Math.random() * 100000)).toString(),
        name: `Product ${Math.floor(Math.random() * 1000)}`,
        image_src: "https://source.unsplash.com/random",
        price: (Math.random() * 100).toFixed(2),
        collection:  { 
            broadType: `BroadType ${Math.ceil(Math.random() * 5)}`,
            type: `Type ${Math.ceil(Math.random() * 10000)}`
        },
        discipline: `Discipline ${Math.ceil(Math.random() * 15)}`,
        description: "Vestibulum ut ipsum quis enim malesuada dignissim. Nulla eget molestie sem. Nullam tempus quis odio ultricies ornare. Cras eleifend quam sed metus scelerisque, ac convallis ligula dignissim"
    }

]

export default mockProducts
