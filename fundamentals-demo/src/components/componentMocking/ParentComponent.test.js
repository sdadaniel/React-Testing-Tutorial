import { screen, render } from '@testing-library/react'
import ParentComponent from './ParentComponent'
import ChildComponent from './ChildComponent'

jest.mock('./ChildComponent')

test('ParentComponent renders', () => {
  render(<ParentComponent />)
  expect(screen.getByText(/Parent Component/i)).toBeInTheDocument()
  expect(screen.queryByText(/Child Component/i)).not.toBeInTheDocument()
})

test('ChildComponent mock was called', () => {
  render(<ParentComponent />)
  expect(ChildComponent).toHaveBeenCalled()
  expect(ChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      message: 'Hello',
    }),
    expect.anything()
  )
})
