import { User } from '../models/user.interface';

const userList: User[]=[
    {
        name:'Adir Zoari',
        company:'BRT',
        location: 'Beer Sheva,IL',
        bio: 'student software enginerring',
        avatar_url:'assets/img/img_adir.jpg',
        email: 'adir@gmail.com'
    },
    {
        name:'Paul Halliday',
        company:'PWH',
        location: 'Durham, UK',
        bio: 'Ionic 3 videos',
        avatar_url:'http://i.imgur.com/jav62p6.jpg',
        email: 'paul@paul.com'
    }
];

export const USER_LIST = userList;