export default {
    name: 'personalDetails',
    title: 'Personal Details',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'visa',
            title: 'Visa',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'github',
            title: 'GitHub',
            type: 'string'
        },
        {
            name: 'twitterName',
            title: 'Twitter Name',
            type: 'string'
        },
        {
            name: 'twitter',
            title: 'Twitter',
            type: 'string'
        },
        {
            name: 'linkedIn',
            title: 'Linked In',
            type: 'string'
        },
        {
            name: 'workBlurb',
            title: 'Work Blurb',
            type: 'text'
        },
        {
            name: 'workBlurb2',
            title: 'Work Blurb 2',
            type: 'text'
        },
        {
            name: 'personalBlurb',
            title: 'Personal Blurb',
            type: 'text'
        },
        {
            name: 'personalBlurb2',
            title: 'Personal Blurb 2',
            type: 'text'
        },
    ],
    preview: {
        select: {
            title: 'name'
        }
    }
}

