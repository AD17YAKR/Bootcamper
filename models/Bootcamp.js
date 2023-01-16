const mongoose = require('mongoose');
const slugify = require('slugify');
const geocoder = require('../utils/geocoder');

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
    location: {
        //GeoJson Code
        type: { type: String, enum: ['Point'], required: false },
        coordinates: { type: [Number], required: false, index: '2dsphere' },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
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

//Create bootcamp slug from the name
BootcampSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    console.log('Slugify ran ', this.name);
    next();
});

//Geocode and create location field
BootcampSchema.pre('save', async function (next) {
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress,
        street: loc[0].streetName,
        city: loc[0].city,
        state: loc[0].stateCode,
        zipCode: loc[0].zipcode,
        country: loc[0].country
    };

    //Don't save address directly into db
    this.address = undefined;

    next();
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
