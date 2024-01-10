import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Collapse from 'react-bootstrap/esm/Collapse';
import { Outlet } from 'react-router-dom';

export interface IHomeComponentProps {
}

export function HomeComponent (props: IHomeComponentProps) {
    console.log(JSON.stringify(props));
    const [open, setOpen] = React.useState(false);
  return (
    <div>
      THIS IS A HOME COMPONENT<br></br>
      Inside the <Outlet/> Outlet
      <hr/>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </div>
  );
}
