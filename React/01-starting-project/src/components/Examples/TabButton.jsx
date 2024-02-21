// id, class 다 넘기기 ex)...props
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  )
}
