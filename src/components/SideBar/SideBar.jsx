import { Bar } from "./SideBar.styled"

export function SideBar() {
  return (
    <Bar>
      <h3> Shops:</h3>
      <ul>
        <li>KFS</li>
        <li>McDony</li>
        <li>Burger</li>
      </ul>
      <button typeof='button'>Clear cart</button>
    </Bar>
  )
}
