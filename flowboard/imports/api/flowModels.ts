import { Board, BoardType, Card, CardType, IBoard } from './models';

export interface IFlowCardMeta {
  flowAge: number;
}

export class FlowCard extends Card {
  type = CardType.FlowCard;
}

export interface IFlowBoardMeta {
  flowMaxUnit: number;
  flowUnitName: string;
  flowUseUAT: boolean;
}

export class FlowBoard extends Board {
  type = BoardType.FlowBoard;
  meta: IFlowBoardMeta;
  constructor(props: IBoard & { meta: IFlowBoardMeta }) {
    super(props);
  }
}
