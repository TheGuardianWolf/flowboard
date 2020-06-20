import { Board, Card, IBoard } from './models';

export class FlowCard extends Card {}

export class FlowBoard extends Board {
  meta: { flowMaxUnit: number; flowUnitName: string; flowUseUAT: boolean };
  constructor(props: IBoard) {
    super(props);
  }
}
