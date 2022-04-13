interface Props {
  children: JSX.Element;
}

export const DarkLayout = ({children}: Props) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: '5px',
      padding: '10px'
    }}>
      <h3>DarkLayout</h3>
      <div>
        {children}
      </div>
    </div>
  )
}