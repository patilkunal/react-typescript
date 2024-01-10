import { Outlet } from 'react-router-dom';

export interface IHomeComponentProps {
}

export function HomeComponent (props: IHomeComponentProps) {
    console.log(JSON.stringify(props));
  return (
    <div>
      THIS IS A HOME COMPONENT<br></br>
      Inside the <Outlet/> Outlet
    </div>
  );
}
