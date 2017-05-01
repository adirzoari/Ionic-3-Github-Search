import { Repository } from '../models/repository.interface';
import { USER_LIST } from './user.mocks';

const repositryList: Repository[]=[
    {
        name:'Ionic 3 Camera',
        description: 'This repository shows the usage of the camera funcionality within Ionic 3',
        owner: USER_LIST[0]
    },
     {
        name:'Ionic 3 SMS',
        description: 'This repository shows the usage of the camera funcionality within Ionic 3',
        owner: USER_LIST[0]
    },
     {
        name:'Ionic 3 GEolocation',
        description: 'This repository shows the usage of the camera funcionality within Ionic 3',
        owner: USER_LIST[1]
    },
    {
        name:'Ionic 3 Camera',
        description: 'This repository shows the usage of the camera funcionality within Ionic 3',
        owner: USER_LIST[1]
    }

];

export const REPOSITORY_LIST = repositryList;