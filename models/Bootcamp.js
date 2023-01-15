const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Add your Name'],
        unique: true,
        trim: true,
        maxLength: [50, 'Name cannot be longer than 50 Characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please Add the description'],
        trim: true,
        maxLength: [500, 'Name cannot be longer than 50 Characters']
    },
    website: {
        type: String,
        match: [
            /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/gm,
            'Please enter a valid website'
        ]
    },
    phone: {
        type: String,
        maxLength: [20, 'Phone Number cannot be longer than 20 digits']
    },
    email: {
        type: String,
        match: [/^\S+@\S+\.\S+$/, 'Please add a valid email']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    //TODO: Update Location
    /*  location: {
        //GeoJson Code
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true, index: '2dsphere' },
        formattedAddressL: String,
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    }, */
    careers: {
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Management',
            'Business',
            'Others'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating cannot be more than 10']
    },
    averageCost: Number,
    photo: { type: String, default: 'no-photo.jpg' },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
