import React from 'react';
import { render, screen,waitFor } from '@testing-library/react';
import {getUser} from 'utility';
import MultiInput from './MultiInput';
import {mocked} from 'ts-jest/utils';

jest.mock('utility')
const mockUserData = mocked(getUser,true);

describe("MultiInput when everything is OK",()=>{
  beforeEach(async ()=>{
    render(<MultiInput />);
    await waitFor(()=>expect(mockUserData).toHaveBeenCalled())
  })
//   test('renders App Comp', () => {
//     screen.debug();
//   });
  
  test('should be able to select the children being passed to the input comp',()=>{
    screen.getAllByText('Input:');
  })
  test("should select the input element by its role and have length 2",()=>{
    screen.getAllByRole('textbox');
    expect(screen.getAllByRole('textbox').length).toEqual(2)
  })
  test('should select a label by its text',()=>{
    screen.getByLabelText('Input:');
  })
})

