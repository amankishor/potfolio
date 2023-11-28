import "./portfoliolist.scss"

export default function Portfolist({id,title,active,setSelected}) {
  return (
    <div>
      <li className={active ? "portfolist active":"Portfolist"} onClick={()=> setSelected(id)}>
        {title}
      </li>
    </div>
  );
}
