import React from 'react';
import { render, screen,wait,waitFor } from '@testing-library/react';
import {getUser} from 'utility';
import App from './App';
import {mocked} from 'ts-jest/utils';

jest.mock('utility')
const mockUserData = mocked(getUser,true);

describe("when everything is OK",()=>{
  beforeEach(async ()=>{
    render(<App />);
    await waitFor(()=>expect(mockUserData).toHaveBeenCalled())
  })
  test('renders App Comp', () => {
    screen.debug();
  });
  
  test('should be able to select the children being passed to the input comp',()=>{
    screen.getByText('Input:');
  })
  test("should select the input element by its role",()=>{
    screen.getByRole('textbox');
  })
  test('should select a label by its text',()=>{
    screen.getByLabelText('Input:');
  })
  test('should select element by its placeholder',()=>{
    screen.getByPlaceholderText("input search text");
    // expect(screen.getByPlaceholderText("input search text")).toBeInTheDocument();
  })

  test('should select input element by its role using queryByRole1',()=>{
    screen.queryByRole('textbox');
  })

  test('should return null for input element by wrong role using queryByRole',()=>{
    //if no element is found it will return null
    expect(screen.queryByRole('bleh')).toBeNull();
  })
})

describe('when comp fetches user data successfuly', () => {
  beforeEach(()=>{
    mockUserData.mockClear();
  })

  test('should call getUser once',async ()=>{
    render(<App />);
    await waitFor(()=>expect(mockUserData).toHaveBeenCalled());
  })
})

