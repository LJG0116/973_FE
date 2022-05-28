import React, { useEffect, useState, useCallback } from 'react';
import { Banner } from '@components/Banner';
import { ButtonInput } from '@components/Button';
import { getRecentCoach, getRecentPlayer } from '@apis/post';
import { CardSection } from '@components/Section';

const HomeSectionContainer = (props) => {
  const [player, setPlayer] = useState({});
  const [coach, setCoach] = useState({});

  const init = useCallback(async () => {
    const playerResponse = await getRecentPlayer();
    setPlayer(playerResponse.data);

    const coachResponse = await getRecentCoach();
    setCoach(coachResponse.data);
  }, []);

  useEffect(() => {
    init();
  }, [init]);
  return (
    <>
      <Banner />
      <ButtonInput />
      <CardSection values={player} title="플레이어" />
      <CardSection values={coach} title="코치" />
    </>
  );
};

export default HomeSectionContainer;
