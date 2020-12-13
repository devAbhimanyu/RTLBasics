import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomInput from './CustomInput';

describe('CustomInput positive testcases', () => {
    test('should call onChange callback when fireEvent is called',()=>{
        const onChangeMock = jest.fn();
        render(<CustomInput onChange={onChangeMock} value="">
            Input:
        </CustomInput>)
        fireEvent.change(screen.getByRole("textbox"),{
            target:{value:"John"}
        })
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
    test('should call onChange callback when userEven is called',async ()=>{
        const onChangeMock = jest.fn();
        render(<CustomInput onChange={onChangeMock} value="">
            Input:
        </CustomInput>)
        await userEvent.type(screen.getByRole("textbox"),"John")
        expect(onChangeMock).toHaveBeenCalledTimes(4);
    });

})
