import React, { useContext } from 'react';

import Button from '../../../../components/Button';

import { AuthContext } from '../../../../auth/Auth';
import useToggleContent from '../../../../hooks/useToggleContent';
import OfferModal from '../../../OfferModal';
import { TaskContext } from '../TaskContext';
import { OPEN } from '../../../../components/Status';
import AuthModal from '../../../../components/AuthModal';

export default function OfferButton() {
  const [Content, toggler] = useToggleContent();

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser && currentUser.userId;

  const { status, offers, postedBy } = useContext(TaskContext);

  const isOpen = (status === OPEN);
  const isOwner = (userId === postedBy._id);
  const isOffered = offers.length &&
    offers.find(({ offeredBy: { _id } }) => _id === userId);

  const label = (!isOpen && `${status}`)
    || (isOwner && 'Your task')
    || (isOffered && 'Offered')
    || 'Make an offer';

  const modal = userId
    ? <OfferModal pageToggler={toggler} />
    : <AuthModal.Login pageToggler={toggler} />;

  return (
    <>
      <Button
        onClick={toggler}
        isDisabled={!isOpen || isOwner || isOffered}
        color="navy"
      >
        {label}
      </Button>
      <Content>
        {modal}
      </Content>
    </>
  );
}
