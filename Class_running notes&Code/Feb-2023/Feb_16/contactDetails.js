// contactDetails.gender
// contactDetails.profilePic
// contactDetails.name.middleName
// contactDetails.contactNo.prsnl[2]
// contactDetails.address.prsnl.stateInfo.name -> contactDetails['address']['prsnl']['stateInfo'].name 


var contactDetails = {
    gender: 'male',
    maritalStatus: 'UM',
    profilePic: 'abc.png',
    name: {
        fname: 'raj',
        lname: 'King',
        middleName: 'Test'
    },
    contactNo: {
        office: '0404-342342',
        prsnl: [2342, 23423, 23423]
    },
    address: {
        office: {
            buildingNo: '5A',
            state: 'TEleangana',
            OfficeSpace: 'Mindspace'
        },
        prsnl: {
            dno: 'A/45',
            stateInfo: {
                statecode: 'Ts',
                name: 'ABC'
            },
            country: 'India'
        }
    },
    emailId: {
        office: 'abc@office.com'
    },
    prsnl: ['abc@gmail.com', 'pqr@yahoo.com'],
    socialId: {
        twitter: 'abcTwitter',
        linkdin: 'abc',
        fbid: 'ttest'
    }
}