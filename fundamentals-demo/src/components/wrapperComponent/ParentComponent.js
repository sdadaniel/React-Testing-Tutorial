import WrapperComponent from './WrapperComponent'

function ParentComponent() {
  return (
    <div className="ParentComponent">
      <div>Parent Component</div>
      <WrapperComponent>
        <div>Textblock 1.</div>
        <div>Textblock 2.</div>
      </WrapperComponent>
      <WrapperComponent>
        <div>Textblock 3.</div>
        <div>Textblock 4.</div>
      </WrapperComponent>
    </div>
  )
}
export default ParentComponent
