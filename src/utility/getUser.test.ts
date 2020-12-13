import {getUser} from './getUser';

describe("getUser: when everything passes",()=>{
    test('should return a response',async ()=>{
        const result =await getUser();
        expect(result).toEqual({id:'1',name:'David'});
    })
})