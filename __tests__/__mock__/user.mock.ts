import { UserEntity } from '../../src/user/entity/user.entity';
import {v4 as uuid} from 'uuid';

export const mockValidUser = (users = 1): Partial<UserEntity|UserEntity[]> => {
    const usersMocked: UserEntity[] = [];
    const defaultValidUser = {
        id: uuid(),
        email: `valid-${users}@mail.com`,
        password: `23456`,
        name: 'valid user',
        documentNumber: '11122233344',
        phoneNumber: '11999998888',
        floor: '12',
        number: '121A',
        parkPlace: 'a12',
        //token: '1091iaoia109aija1sio.sj2io98d39487d',
    };

    if(users === 1) {
        return defaultValidUser;
    }

    for(let i = 0; i < users; i++) {
        const tempUser = {
            id: uuid(),
            email: `valid-${i}@mail.com`,
            password: String(i).repeat(6),
            name: 'valid user',
            createdAt: new Date().getTime().toString(),
            documentNumber: '11122233344',
            phoneNumber: '11999998888',
            floor: i.toString(),
            number: `${i}A`,
            parkPlace: `a${i}`,
            //token: uuid(),
        } as UserEntity;

        usersMocked.push(tempUser);
    }
    return usersMocked;
}

export const mockInvalidUser: Partial<UserEntity> = {
    id: uuid(),
    email: 'valid.gmail.com',
    password: '',
    name: 'valid user',
    documentNumber: '11122233344',
    phoneNumber: '11999998888',
    floor: '12',
    number: '121A',
    parkPlace: 'a12',
    token: '1091iaoia109aija1sio.sj2io98d39487d',
}