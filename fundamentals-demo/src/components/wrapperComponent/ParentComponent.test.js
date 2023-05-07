import { render, screen } from '@testing-library/react'
import ParentComponent from './ParentComponent'
import WrapperComponent from './WrapperComponent'

jest.mock('./WrapperComponent', () => ({
  __esModule: true,
  // eslint-disable-next-line testing-library/no-node-access
  default: jest.fn((props) => <>{props.children}</>),
  ExtraComponent: jest.fn(),
}))

test('ParentComponent renders correctly', () => {
  render(<ParentComponent />)
  expect(screen.getByText(/Parent Component/i)).toBeInTheDocument()
})

// // you wouldn't write this test in a real app, but it makes sense here
test('WrapperComponent is mocked and not rendered', () => {
  render(<ParentComponent />)
  expect(screen.queryByText(/Wrapper Component/i)).not.toBeInTheDocument()
})

test('Wrapper mock was called correctly', () => {
  render(<ParentComponent />)
  expect(WrapperComponent).toHaveBeenCalledTimes(2)
})

test('Wrapper children got rendered', () => {
  render(<ParentComponent />)
  expect(screen.getAllByText(/Textblock/)).toHaveLength(4)
})
