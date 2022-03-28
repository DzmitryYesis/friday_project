import { FC, memo } from 'react';

import { useSelector } from 'react-redux';

import { EditCard, DeleteCard, Rating } from 'components';
import { RootReducerType } from 'store';
import {
  selectAnswer,
  selectGradeCard,
  selectQuestion,
  selectUpdateCard,
} from 'store/selectors';
import { Flex, TableItem } from 'styles';

type CardItemPropsType = {
  cardId: string;
  isMyPack: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  background?: string;
};

export const CardItem: FC<CardItemPropsType> = memo(
  ({ background, cardId, isMyPack }) => {
    CardItem.defaultProps = {
      background: undefined,
    };

    const question = useSelector((state: RootReducerType) =>
      selectQuestion(state, cardId),
    );
    const answer = useSelector((state: RootReducerType) => selectAnswer(state, cardId));
    const grade = useSelector((state: RootReducerType) => selectGradeCard(state, cardId));
    const updated = useSelector((state: RootReducerType) =>
      selectUpdateCard(state, cardId),
    );

    const dataNew = new Date(updated);

    return (
      <Flex background={background} justifyContent="center" alignItems="center">
        <TableItem flexBasis="40%">{question}</TableItem>
        <TableItem flexBasis="40%">{answer}</TableItem>
        <TableItem flexBasis="10%">{dataNew.toLocaleDateString()}</TableItem>
        <TableItem flexBasis="10%">
          <Rating activeStars={grade} />
        </TableItem>
        {isMyPack && (
          <TableItem flexBasis="10%">
            <EditCard cardId={cardId} />
            <DeleteCard cardId={cardId} />
          </TableItem>
        )}
      </Flex>
    );
  },
);
