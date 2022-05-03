interface ButtonProps {
  text?: string
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 px-4 h-10 rounded hover:bg-violet-700" >{props.text ?? 'default'}</button>
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="Send" />
      <Button text="Ok" />
      <Button />
    </div>
  )
}

export default App
