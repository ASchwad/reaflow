export interface NodeData<T = any> {
  id: string;
  x?: number;
  y?: number;
  disabled?: boolean;
  text?: any;
  height?: number;
  width?: number;
  parent?: NodeData;
  edges?: EdgeData[];
  ports?: PortData[];
  icon?: IconData;
  data?: T;
  style?: any;
  className?: string;
  hidden?: boolean;
}

export interface IconData {
  url: string;
  height: number;
  width: number;
}

export interface EdgeData<T = any> {
  id: string;
  disabled?: boolean;
  text?: any;
  from?: string;
  to?: string;
  fromPort?: string;
  toPort?: string;
  data?: T;
  style?: any;
  className?: string;
  arrowHeadType?: any;
}

export interface PortData {
  id: string;
  height: number;
  width: number;
  hidden?: boolean;
  alignment?: 'CENTER';
  side: 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
}
