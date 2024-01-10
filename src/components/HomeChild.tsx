import * as React from 'react';
import { useParams } from 'react-router-dom';

export interface IHomeChildProps {
}

export function HomeChild (props: IHomeChildProps) {
  const params = useParams();
  return (
    <div>
      This is a child of the home component. with id as {params.childId}
    </div>
  );
}
